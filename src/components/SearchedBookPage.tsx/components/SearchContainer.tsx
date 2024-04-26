import React, { useState, useEffect} from "react";
import ResultBookDisplay from "./ResultBookDisplay";
import TitleAndSort from "./TitleAndSort";
import SortByDownload from "./SortByDownload";

const SearchContainer: React.FC<{ data: any, search: any, search2: any }>= ({ data, search, search2 }) => {
    const [lastSort, setLastSort] = useState("");
    const [bookData, setBookData] = useState({
        formats: { 'text/html': " " },
        download_count: 0,
        languages: [],
        copywrite: false,
        results: []
    });
    useEffect(() => {
       
        if (data) {
            setBookData(data);
        }
    }, [data]);
       
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
                return book.subjects.some((subject: string) => subject.toLowerCase().includes("non fiction")) === false;
            });
            const sortedData = { ...data, results };
            setBookData(sortedData);
            setLastSort("nonFictionButton");
        }
    };
    const sortByDownloadCount = (data: any, min: number, max: number) => {
        let results = data.results.slice();
        results = results.sort((a: any, b: any) => b.download_count - a.download_count)
            .filter((item: any) => item.download_count >= min && item.download_count <= max);
        const sortedData = { ...data, results };
        setBookData(sortedData);
    };
    const handleSortByDownload = (min: number, max: number) => {
        sortByDownloadCount(bookData, min, max);
    };
    return (
        <>
            <TitleAndSort
                bookData={bookData}
                data={data}
                search={search}
                search2={search2}
                idButton={() => sortById(bookData)}
                alphabetButton={() => sortAlphabetically(bookData)}
                clearButton={() => sortClear(data)}
                fictionButton={() => findFiction()}
                nonFictionButton={() => findNonFiction()} />
            <SortByDownload handleSortByDownload={handleSortByDownload} />
            <ResultBookDisplay bookData={bookData} />
        </>
    )
}
export default SearchContainer;
