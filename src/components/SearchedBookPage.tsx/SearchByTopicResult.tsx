import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import { useGetSearchByTopicQuery } from "../../redux/bookApi";
import ResultBookDisplay from "./components/ResultBookDisplay";

const SearchByTopicResult: React.FC = () => {
    const { topic } = useParams();
    const { data, isLoading, error } = useGetSearchByTopicQuery(topic);
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        console.error(error)
    }

    return (
        <>
            {data.results.length === 0
                ? //If there are NO books with that topic...
                <Alert
                    sx={{ mt: 15 }}
                    severity="info">
                    <Typography variant="h4">
                        Sorry, there is no books under the topic of: {topic}.
                    </Typography>
                </Alert>
                : //If there ARE books with that topic...
                <div>
                    <Typography
                        sx={{ mt: 15, ml: 3 }}
                        variant="h3">
                        All Books Under the Topic of: "{topic}"
                    </Typography>
                    {/* <Stack direction="row">
                        <SortByPopularityButton />
                        <SortAlphabeticallyButton />
                    </Stack> */}
                </div>
            }
            <ResultBookDisplay bookData={data} />
        </>
    )
}
export default SearchByTopicResult