
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Search from "@mui/icons-material/Search";
import { useState } from "react";
import MobileTheme from "../../SharedComponents/MobileTheme";

const SortByDownloadForm: React.FC<{ handleSortByDownload: any }> = ({ handleSortByDownload }) => {
    const [lowestCount, setLowestCount] = useState("");
    const [highestCount, setHighestCount] = useState("");
    const [emptyError, setEmptyError] = useState(false);
    const [onlyNumbersError, setOnlyNumberError] = useState(false);
    const [numberOrderError, setNumberOrderError] = useState(false);

    const { isMobile } = MobileTheme();

    const isNumeric = (value: string) => /^\d+$/.test(value); //Check to see if the value is a number...
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (lowestCount.length === 0 || highestCount.length === 0) {
            setEmptyError(true);
            setNumberOrderError(false)
            setOnlyNumberError(false);
        } else if (!isNumeric(lowestCount) || !isNumeric(highestCount)) {
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
                variant={isMobile ? "h6" : "h5"}>
                Enter Download Count Range:
            </Typography>
            <form>
                <Box sx={{
                    my: isMobile ? 1 : 5,
                    ml: 3
                }}>
                    <input
                        placeholder="Lowest Number"
                        className="search-number"
                        value={lowestCount}
                        onChange={(event) => { setLowestCount(event.target.value) }}
                    />
                </Box>
                <Box sx={{
                    my: isMobile ? 1 : 5,
                    ml: 3
                }}>
                    <input
                        placeholder="Highest Number"
                        className="search-number"
                        value={highestCount}
                        onChange={(event) => { setHighestCount(event.target.value) }}
                    />
                </Box>
                <button
                    onClick={handleClick}
                    className={"mobile-search-button"}>
                    <Search />
                </button>
            </form>
            {emptyError &&
                <Alert sx={{ mx: isMobile ? 1 : 3, mt: 1 }} severity="error">
                    Please fill in both fields with a number.
                </Alert>
            }
            {numberOrderError &&
                <Alert sx={{ mx: isMobile ? 1 : 3, mt: 1 }} severity="error">
                    Please make sure the lowest number value is less than the higher number value.
                </Alert>
            }
            {onlyNumbersError &&
                <Alert sx={{ mx: isMobile ? 1 : 3, mt: 1 }} severity="error">
                    Please only enter numbers.
                </Alert>
            }
        </div>
    )
}
export default SortByDownloadForm