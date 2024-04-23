
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Search from "@mui/icons-material/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchByDownloadCount = () => {
    const [lowestCount, setLowestCount] = useState("");
    const [highestCount, setHighestCount] = useState("");

    const navigate = useNavigate();

    const handleSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (lowestCount.length === 0 || highestCount.length === 0) {
            event.preventDefault()
            console.log("No searched item")
        } else {
            navigate(`search_book/${lowestCount}/${highestCount}`)
        }
    }
    return (
        <div>
            <form>
                <Grid
                    container
                    spacing={1}
                    sx={{ my: 10, mx: 40 }}
                >
                    <Grid item xs={1.5}>
                        <Typography variant="h6" sx={{ mt: 1, color: "black", mr: 1 }}>
                            Lowest Number:
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <input
                            className="search-number"
                            value={lowestCount}
                            onChange={(event) => { setLowestCount(event.target.value) }}
                        />
                    </Grid>
                    <Grid
                        sx={{ ml: 5 }}
                        item xs={1.5}>
                        <Stack direction="row">
                            <Typography variant="h6" sx={{ mt: 1, color: "black", mr: 1 }}>
                                Highest Number:
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={1}>
                        <Stack direction="row">
                            <input
                                className="search-number"
                                value={highestCount}
                                onChange={(event) => { setHighestCount(event.target.value) }}
                            />
                        </Stack>
                    </Grid>
                    <Grid
                        sx={{ ml: 5 }}
                        item xs={1}>
                        <button onClick={(event) => handleSearch(event)} className="search-button">
                            <Search />
                        </button>
                    </Grid>
                </Grid>

            </form>
        </div>
    )
}
export default SearchByDownloadCount