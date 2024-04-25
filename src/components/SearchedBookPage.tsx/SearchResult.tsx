import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetSearchQuery } from "../../redux/bookApi";
import ResultBookDisplay from "./components/ResultBookDisplay";
import Loader from "../SharedComponents/Loader";
import TitleAndSort from "./components/TitleAndSort";
import PreviousAndNextButtons from "./components/PreviousAndNextButtons";

const SearchResults: React.FC = () => {
    const [page, setPage] = useState(1);
    const [lastSort, setLastSort] = useState("");
    const { searchBook } = useParams();
    const [bookData, setBookData] = useState({
        formats: { 'text/html': " " },
        download_count: 0,
        languages: [],
        copywrite: false,
        results: []
    });
    const { data, isLoading, error } = useGetSearchQuery({ search: searchBook, page: page });
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
    const findFiction = () => {
        if (lastSort !== "fictionButton") {
            const results = data.results.filter((book: { subjects: [] }) => {
                return book.subjects.some((subject: string) => subject.toLowerCase().includes("fiction")) === true;
            });
            const sortedData = { ...data, results };
            setBookData(sortedData);
            setLastSort("fictionButton");
        }
    };
    const findNonFiction = () => {
        if (lastSort !== "nonFictionButton") {
            const results = data.results.filter((book: { subjects: [] }) => {
                return book.subjects.some((subject: string) => subject.toLowerCase().includes("fiction")) === false;
            });
            const sortedData = { ...data, results };
            setBookData(sortedData);
            setLastSort("nonFictionButton");
        }
    };
    return (
        <>
            <TitleAndSort
                bookData={bookData}
                data={data}
                search={searchBook}
                search2={null}
                idButton={() => sortById(bookData)}
                alphabetButton={() => sortAlphabetically(bookData)}
                clearButton={() => sortClear(data)}
                fictionButton={() => findFiction()}
                nonFictionButton={() => findNonFiction()} />
            <ResultBookDisplay bookData={bookData} />
            <PreviousAndNextButtons
                previous={() => setPage(page - 1)}
                next={() => setPage(page + 1)}
            />
        </>
    )
}
export default SearchResults;
