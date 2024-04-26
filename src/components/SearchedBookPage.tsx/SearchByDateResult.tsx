import { useParams } from "react-router-dom";
import { useGetSearchByDateQuery } from "../../redux/bookApi";
import { useState, useEffect } from 'react';
import Loader from '../SharedComponents/Loader';
import PreviousAndNextButtons from "./components/PreviousAndNextButtons";
import SearchContainer from "./components/SearchContainer";

const SearchByDateResult: React.FC = () => {
    const [page, setPage] = useState(1)
    const { start: startDate, end: endDate } = useParams();
    const { data, isLoading, error } = useGetSearchByDateQuery({ start: startDate, end: endDate, page: page });

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
    return (
        <>
            <SearchContainer
                data={data}
                search={startDate}
                search2={endDate}
            />
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
export default SearchByDateResult;
