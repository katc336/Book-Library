
import Alert from "@mui/material/Alert";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Search from "@mui/icons-material/Search";
import { useState } from "react";

const SortByDownloadForm: React.FC<SortByDownloadFormProps> = ({ handleSortByDownload }) => {
    const [lowestCount, setLowestCount] = useState("");
    const [highestCount, setHighestCount] = useState("");
    const [emptyError, setEmptyError] = useState(false);
    const [onlyNumbersError, setOnlyNumberError] = useState(false);
    const [numberOrderError, setNumberOrderError] = useState(false);
    const isNumeric = (value: string) => /^\d+$/.test(value); //Check to see if the value is a number...
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (lowestCount.length === 0 || highestCount.length === 0) {
            setEmptyError(true);
            setNumberOrderError(false)
            setOnlyNumberError(false);
        } else if (!isNumeric(lowestCount) || !isNumeric(highestCount) ){
            event.preventDefault();
            setEmptyError(false);
            setNumberOrderError(false)
            setOnlyNumberError(true);
        } else if (lowestCount > highestCount) {
            event.preventDefault();
            setEmptyError(false);
            setNumberOrderError(true);
            setOnlyNumberError(false);
        }
         else
        handleSortByDownload(Number(lowestCount), Number(highestCount));
    };
    return (
        <div>
            <Typography
                sx={{ mx: 3 }}
                variant="h5">
                Enter Download Range:
            </Typography>
            <form>
                <Grid
                    sx={{ mx: 3, mt: 5 }}
                    container >
                    <Grid item xs={1.5}>
                        <Typography variant="h6" sx={{ mt: 1, color: "black", mr: 1 }}>
                            Lowest:
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
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
                                Highest:
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={2}>
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
                        <button
                            onClick={handleClick}
                            className="search-button">
                            <Search />
                        </button>
                    </Grid>
                </Grid>
            </form>
            {emptyError &&
                <Alert sx={{ mx: 3, mt: 1 }} severity="error">
                    Please fill in both fields with a number.
                </Alert>
            }
            {numberOrderError &&
                <Alert sx={{ mx: 3, mt: 1 }} severity="error">
                    Please make sure the lowest number value is less than the higher number value.
                </Alert>
            }
            {onlyNumbersError &&
                <Alert sx={{ mx: 3, mt: 1 }} severity="error">
                    Please only enter numbers.
                </Alert>
            }
        </div>
    )
}
export default SortByDownloadForm