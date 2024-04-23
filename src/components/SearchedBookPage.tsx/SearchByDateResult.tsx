import { useParams } from "react-router-dom";
import { useGetSearchByDateQuery } from "../../redux/bookApi";
import { useState, useEffect } from 'react';
import TitleAndSort from './components/TitleAndSort';
import ResultBookDisplay from './components/ResultBookDisplay';
import Loader from '../SharedComponents/Loader';
import PreviousAndNextButtons from "./components/PreviousAndNextButtons";

const SearchByDateResult: React.FC = () => {
    const [page, setPage] = useState(1)
    const { start: startDate, end: endDate } = useParams();
    const { data, isLoading, error } = useGetSearchByDateQuery({ start: startDate, end: endDate, page: page });
    const [bookData, setBookData] = useState({
        formats: { 'text/html': " " },
        download_count: 0,
        languages: [],
        copywrite: false,
        results: []
    });
    useEffect(() => {
        if (isLoading) {
            return;
        }
        if (error) {
            console.error(error);
        }
        if (data) {
            setBookData(data);
        }
    }, [data, isLoading, error]);
    if (isLoading) {
        return <Loader />;
    }
    const sortById = (data: any) => {
        // Make a copy of the results array from the data object
        let results = data.results.slice();
        // Sort the results array by id with highest first
        results.sort((a: { id: number }, b: { id: number }) => b.id - a.id);
        // Create a new object with the sorted results
        const sortedData = { ...data, results }; // Update the results array
        setBookData(sortedData);
    };

    const sortAlphabetically = (data: any) => {
        // Make a copy of the results array from the data object
        let results = data.results.slice();
        // Sort alphabetically by title, excluding "The", "A", "An" as the first word
        results.sort((a: { title: string }, b: { title: string }) => {
            const firstTitle = a.title.toLowerCase().replace(/^(the|a|an) /, "");
            const secondTitle = b.title.toLowerCase().replace(/^(the|a|an) /, "");
            return firstTitle.localeCompare(secondTitle);
        });
        // Create a new object with the sorted results
        const sortedData = { ...data, results }; // Update the results array
        setBookData(sortedData);
    };
    const sortClear = (data: any) => {
        setBookData(data);
    };
    console.log(bookData)
    return (
        <>
           <TitleAndSort
                bookData={bookData}
                data={data}
                search={startDate}
                search2={endDate}
                button1={() => sortById(bookData)}
                button2={() => sortAlphabetically(bookData)}
                button3={() => sortClear(data)} />
            <ResultBookDisplay bookData={bookData} />
            <PreviousAndNextButtons
                previous={() => setPage(page - 1)}
                next={() => setPage(page + 1)}
            />
        </>
    )
}
export default SearchByDateResult;
