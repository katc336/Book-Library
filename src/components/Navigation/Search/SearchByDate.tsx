import Alert from "@mui/material/Alert";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Search from "@mui/icons-material/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileTheme from "../../SharedComponents/MobileTheme";

const SearchByDate = () => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [emptyError, setEmptyError] = useState(false);
    const [numberOrderError, setNumberOrderError] = useState(false);
    const [onlyNumbersError, setOnlyNumberError] = useState(false);

    const navigate = useNavigate();
    const { isMobile } = MobileTheme();

    const handleSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
        const isNumeric = (value: string) => /^\d+$/.test(value); //Check to see if the value is a number...
        if (startDate.length === 0 || endDate.length === 0) {
            event.preventDefault();
            setEmptyError(true);
            setNumberOrderError(false);
            setOnlyNumberError(false);
        } else if (!isNumeric(startDate) || !isNumeric(endDate)
            || startDate.length !== 4 || endDate.length !== 4) {
            event.preventDefault();
            setEmptyError(false);
            setNumberOrderError(false);
            setOnlyNumberError(true);
        } else if (startDate > endDate) {
            event.preventDefault();
            setEmptyError(false);
            setNumberOrderError(true);
            setOnlyNumberError(false);
        } else {
            setEmptyError(false);
            setNumberOrderError(false);
            setOnlyNumberError(false);
            navigate(`search_book/${startDate}/${endDate}`);
        }
    }

    return (
        <div>
            <form>
                <Grid
                    container spacing={3}
                    sx={{
                        my: isMobile ? 1 : 10,
                        mx: isMobile ? 0 : 20
                    }}>
                    {isMobile ? <div /> : <Grid item xs={2}></Grid>}
                    <Grid item xs={isMobile ? 12 : 2}>
                        <Stack direction="row">
                            <Typography
                                variant="h6"
                                sx={{ mt: 1, color: "black", mr: 1 }}>
                                Start:
                            </Typography>
                            <input
                                className={isMobile ? "mobile-search-number" : "search-number"}
                                value={startDate}
                                onChange={(event) => {
                                    setStartDate(event.target.value)
                                }}
                            />
                        </Stack>
                    </Grid>
                    <Grid item xs={isMobile ? 12 : 2}>
                        <Stack direction="row">
                            <Typography
                                variant="h6"
                                sx={{ mt: 1, color: "black", mr: 1 }}>
                                End:
                            </Typography>
                            <input
                                className={isMobile ? "mobile-search-number" : "search-number"}
                                value={endDate}
                                onChange={(event) => {
                                    setEndDate(event.target.value)
                                }}
                            />
                        </Stack>
                    </Grid>
                    <Grid item xs={3}>
                        <button
                            onClick={(event) => handleSearch(event)}
                            className={isMobile ? "mobile-date-search-button" : "search-button"}>
                            <Search />
                        </button>
                    </Grid>
                </Grid>
            </form>
            {emptyError &&
                <Alert sx={{ mx: isMobile ? 3 : 50 }} severity="error">
                    Please fill in both fields with a date.
                </Alert>
            }
            {numberOrderError &&
                <Alert sx={{ mx: isMobile ? 3 : 50 }} severity="error">
                    Please make sure the start date is before the end date.
                </Alert>
            }
            {onlyNumbersError &&
                <Alert sx={{ mx: isMobile ? 3 : 50 }} severity="error">
                    Please only enter dates of years.
                </Alert>
            }
        </div>
    )
}
export default SearchByDate