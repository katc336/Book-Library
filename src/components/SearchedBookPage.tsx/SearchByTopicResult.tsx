import { useParams } from "react-router-dom";
import { useGetSearchByTopicQuery } from "../../redux/bookApi";
import { useState, useEffect } from "react";
import Loader from "../SharedComponents/Loader";
import PreviousAndNextButtons from "./components/PreviousAndNextButtons";
import SearchContainer from "./components/SearchContainer";
const SearchByTopicResult: React.FC = () => {
    const [page, setPage] = useState(1)
    const { topic } = useParams();
    const { data, isLoading, error } = useGetSearchByTopicQuery({ topic, page });
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
                search={topic}
                search2={null} />
            <PreviousAndNextButtons
                previous={() => setPage(page - 1)}
                next={() => setPage(page + 1)}
            />
        </>
    )
}
export default SearchByTopicResult