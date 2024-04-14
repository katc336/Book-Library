import Stack from "@mui/material/Stack"
import Search from "@mui/icons-material/Search"

const SearchBar: React.FC = () => {
    return (
        <div>
            <form>
                <Stack direction="row">
                    <input className="search-bar">
                    </input>
                    <button className="search-button">
                        <Search />
                    </button>
                </Stack>
            </form>
        </div>
    )
}
export default SearchBar