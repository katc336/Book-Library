import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Link, useParams } from "react-router-dom";
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
            {data.results.length === 0
                ?
                <Alert
                    sx={{ mt: 15 }}
                    severity="info">
                    <Typography variant="h4">
                        Sorry, there is no books matching your search of: {searchBook}.
                    </Typography>
                </Alert>
                :
                <Typography
                    sx={{ mt: 15, ml: 3 }}
                    variant="h3">
                    All Books With {searchBook}:
                </Typography>
            }
            <Stack direction="row" flexWrap="wrap">
                {data.results.map((book: SearchResult) => (
                    <Stack direction="column">
                        <Typography
                            variant="h4"
                            sx={{ color: "#205375", textAlign: "center", mb: 2 }}>
                            {book.name}
                        </Typography>
                        <Box
                            sx={{ mt: 15, mx: 3 }}
                            key={book.id}>
                            <Link to={`/book/${book.id}`}>
                                <img
                                    width="150"
                                    height="230"
                                    src={book.formats['image/jpeg']} alt={book.name} />
                            </Link>
                        </Box>
                    </Stack>
                ))
                }
            </Stack>
        </>
    )
}

export default SearchResults;