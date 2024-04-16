import { useParams } from "react-router-dom";
import { useGetSearchQuery } from "../../redux/bookApi";

const SearchResults: React.FC = () => {
    const { searchBook } = useParams();
    const { data, isLoading, error } = useGetSearchQuery(searchBook);
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        console.error(error)
    }
    console.log(searchBook)
    console.log(data);
    return (
        <>
          
        </>
    )
}

export default SearchResults;