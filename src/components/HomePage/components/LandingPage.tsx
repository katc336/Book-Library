import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ReadingBook from "../images/ReadingBook.png"
import AspectRatio from '@mui/joy/AspectRatio';
import { Link } from "react-router-dom";

const LandingPage: React.FC = () => {
    return (
        <div>
            <Grid
                sx={{ pt: 3, pb: 10, mt: 20, backgroundColor: "#EEFDDB" }}
                container>
                <Grid item xs={8}>
                    <Typography
                        sx={{ mx: 3, color: "#100937", mr: "10%" }}
                        variant="h1">
                        Expand your literary horizons
                        with the Gutenberg Project
                    </Typography>
                    <Box sx={{ ml: 20, mt: 5 }}>
                        <Link to="/search_book/most_popular">
                            <button
                                className="search-button">
                                <Typography variant="h4">
                                    See Most Popular Books
                                </Typography>
                            </button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <AspectRatio
                        ratio="1"
                        objectFit="contain"
                        variant="plain">
                        <img src={ReadingBook} alt="Picture of a woman reading a book" />
                    </AspectRatio>
                </Grid>
            </Grid>
        </div>
    )
}
export default LandingPage