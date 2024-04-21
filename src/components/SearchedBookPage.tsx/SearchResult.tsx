import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useParams } from "react-router-dom";
import { useGetSearchQuery } from "../../redux/bookApi";
import SortAlphabeticallyButton from './components/SortAlphabeticallyButton';
import SortByPopularityButton from './components/SortByPopularityButton';
import ResultBookDisplay from "./components/ResultBookDisplay";

const SearchResults: React.FC = () => {
    const { searchBook } = useParams();
    const { data, isLoading, error } = useGetSearchQuery(searchBook);
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        console.error(error)
    }

    return (
        <>
            {data.results.length === 0
                ? //If there are NO books with that search...
                <Alert
                    sx={{ mt: 15 }}
                    severity="info">
                    <Typography variant="h4">
                        Sorry, there is no books matching your search of: {searchBook}.
                    </Typography>
                </Alert>
                : //If there ARE books with that name...
                <div>
                <Typography
                    sx={{ mt: 15, ml: 3 }}
                    variant="h3">
                    All Books With: "{searchBook}"
                </Typography>
                <Stack direction="row">
                        <SortByPopularityButton />
                        <SortAlphabeticallyButton />
                    </Stack>
                </div>
            }
            <ResultBookDisplay bookData={data} />
        </>
    )
}

export default SearchResults;