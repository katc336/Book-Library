import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Search from "@mui/icons-material/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchByTopic: React.FC = () => {
    const [topic, setTopic] = useState("");
    const [lengthError, setLengthError] = useState(false);

    const navigate = useNavigate();

    const handleSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (topic.length === 0) {
            event.preventDefault();
            console.log("No searched item")
        } else if (topic.length > 50) {
            event.preventDefault();
            setLengthError(true);
        }
        else {
            setLengthError(false);
            navigate(`/search_book/topic/${topic}`)
        }
    }
    return (
        <div>
            <form>
                <Grid
                    sx={{ my: 10, mx: 20 }}
                    container spacing={3}
                >
                    <Grid item xs={1} /> {/* spacing */}
                    <Grid item xs={10}>
                        <Stack direction="row">
                            <Typography
                                variant="h6"
                                sx={{ mt: 1, color: "black", mr: 1 }}>
                                Topic:
                            </Typography>
                            <input
                                className="search-bar"
                                value={topic}
                                onChange={(event) => {
                                    setTopic(event.target.value)
                                }}
                            />
                            <Box sx={{ ml: 2 }}>
                                <button
                                    onClick={(event) => handleSearch(event)}
                                    className="search-button">
                                    <Search />
                                </button>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={1} />{/* spacing */}
                </Grid>
            </form>
            {lengthError &&
                <Alert sx={{ mx: 50 }} severity="error">
                    Please shorten your search to under 50 characters.
                </Alert>
            }
        </div>
    )
}
export default SearchByTopic