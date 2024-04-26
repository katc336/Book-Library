import Alert from "@mui/material/Alert";
import Grid from "@mui/material/Grid";
import Search from "@mui/icons-material/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileTheme from "../../SharedComponents/MobileTheme";

const SearchBar: React.FC = () => {
    const [searchBook, setSearchBook] = useState("");
    const [lengthError, setLengthError] = useState(false);

    const navigate = useNavigate();

    const { isMobile } = MobileTheme();

    const handleSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (searchBook.length === 0) {
            event.preventDefault()
            console.log("No searched item")
        } else if (searchBook.length > 100) {
            event.preventDefault();
            setLengthError(true);
        }
        else {
            navigate(`/search_book/${searchBook}`)
        }
    }

    return (
        <div>
            <form>
                <Grid container>
                    <Grid item xs={isMobile ? 6 : 9}>
                        <input
                            className={isMobile ? "mobile-search-bar" : "search-bar"}
                            value={searchBook}
                            onChange={(event) => {
                                setSearchBook(event.target.value)
                            }}
                        />
                    </Grid>
                    <Grid item xs={isMobile ? 1 : 3}>
                        <button
                            onClick={(event) => handleSearch(event)}
                            className={isMobile ? "mobile-search-button" : "search-button"}>
                            <Search />
                        </button>
                    </Grid>
                </Grid>
            </form>
            {lengthError &&
                <Alert sx={{ mr: 35}}severity="error">
                    Please shorten your search to under 100 characters.
                </Alert>
            }
        </div>
    );
}
export default SearchBar;


