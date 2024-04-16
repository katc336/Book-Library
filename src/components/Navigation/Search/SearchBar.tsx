import Grid from "@mui/material/Grid";
import Search from "@mui/icons-material/Search";
import { useState } from "react";
import { Link } from "react-router-dom";

const SearchBar: React.FC = () => {
    const [searchBook, setSearchBook] = useState("");
    return (
        <div>
            <form>
                <Grid container>
                    <Grid item xs={9}>
                        <input
                            className="search-bar"
                            value={searchBook}
                            onChange={(event) => {
                                setSearchBook(event.target.value)
                            }}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Link to={`/search_book/${searchBook}`}>
                            <button className="search-button">
                                <Search />
                            </button>
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}
export default SearchBar;


