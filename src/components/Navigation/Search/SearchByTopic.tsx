import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Search from "@mui/icons-material/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchByTopic: React.FC = () => {
    const [topic, setTopic] = useState("");

    const navigate = useNavigate();

    const handleSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (topic.length === 0) {
            event.preventDefault()
            console.log("No searched item")
        } else {
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
                    <Grid item xs={2}></Grid>
                    <Grid item xs={7}>
                        <Stack direction="row">
                            <Typography
                                variant="h6"
                                sx={{ mt: 1, color: "black", mr: 1 }}>
                                Start:
                            </Typography>
                            <input
                                className="search-date"
                                value={topic}
                                onChange={(event) => {
                                    setTopic(event.target.value)
                                }}
                            />
                        </Stack>
                    </Grid>
                    <Grid item xs={3}>
                        <button
                            onClick={(event) => handleSearch(event)}
                            className="search-button">
                            <Search />
                        </button>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}
export default SearchByTopic