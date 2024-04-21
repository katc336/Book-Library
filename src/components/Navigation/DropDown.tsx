import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import NavButton from "./NavButton";
import { useState } from "react";
import SearchByDate from "./Search/SearchByDate";

const DropDown: React.FC = () => {
    const [showDateSearch, setShowDateSearch] = useState(false);
    const [showPopularSearch, setShowPopularSearch] = useState(false);
    const [showGenreSearch, setShowGenreSearch] = useState(false);
    return (
        <div>
            <Box sx={{ ml: 3 }}>
                <Grid container spacing={3}>
                    <Grid item xs={2}>
                        <Typography
                            variant="h5"
                            sx={{ mt: 1.5, color: "#031920" }}>
                            Search By:
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <NavButton
                            setNew={() => setShowDateSearch(true)}
                            navWord="Date" />
                    </Grid>
                    <Grid item xs={3}>
                        <NavButton
                            setNew={() => setShowPopularSearch(true)}
                            navWord="Most Popular" />
                    </Grid>
                    <Grid item xs={3}>
                        <NavButton
                            setNew={() => setShowGenreSearch(true)}
                            navWord="Genre" />
                    </Grid>
                </Grid>
                {showDateSearch && <SearchByDate /> }
                {showPopularSearch &&
                    <Box>
                    </Box>
                }
                {showGenreSearch &&
                    <Box>
                    </Box>
                }
            </Box>
        </div>
    )
}
export default DropDown