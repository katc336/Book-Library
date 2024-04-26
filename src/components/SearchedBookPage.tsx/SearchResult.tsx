import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetSearchQuery } from "../../redux/bookApi";
import Loader from "../SharedComponents/Loader";
import PreviousAndNextButtons from "./components/PreviousAndNextButtons";
import SearchContainer from "./components/SearchContainer";

const SearchResults: React.FC = () => {
    const [page, setPage] = useState(1);
    const { searchBook } = useParams();

    const { data, isLoading, error } = useGetSearchQuery({ search: searchBook, page: page });
    useEffect(() => {
        if (isLoading) {
            return;
        }
        if (error) {
            console.error(error);
        }
    }, [data, isLoading, error]);
    if (isLoading) {
        return <Loader />;
    }
    console.log(data)
    return (
        <>
            <SearchContainer
                data={data}
                search={searchBook}
                search2={null} />
            {data.results && data.results.length === 0
                ?//If there are NO books...
                <div />
                : //If there ARE books...
                <div>
                    <PreviousAndNextButtons
                        previous={() => setPage(page - 1)}
                        next={() => setPage(page + 1)}
                    />
                </div>
            }
        </>
    )
}
export default SearchResults;
