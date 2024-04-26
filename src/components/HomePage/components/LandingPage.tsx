import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ReadingBook from "../images/ReadingBook.png"
import AspectRatio from '@mui/joy/AspectRatio';
import { Link } from "react-router-dom";
import MobileTheme from '../../SharedComponents/MobileTheme';

const LandingPage: React.FC = () => {
    const { isMobile } = MobileTheme();
    return (
        <div>
            <Grid
                sx={{ pt: 3, pb: 10, mt: isMobile ? 18 : 20, backgroundColor: "#EEFDDB" }}
                container>
                <Grid item xs={isMobile ? 6 : 8}>
                    <Typography
                        sx={{ mx: 3, color: "#100937", mr: "10%" }}
                        variant={isMobile ? "h5" : "h1"}>
                        Expand your literary horizons
                        with the Gutenberg Project
                    </Typography>
                    {isMobile
                        ?
                        <div />
                        :
                        <div>
                            <Box sx={{ ml: isMobile ? 3 : 20, mt: 5 }}>
                                <Link to="/search_book/most_popular">
                                    <button
                                        className="mobile-see-popular-button">
                                        <Typography variant={isMobile ? "h6" : "h4"}>
                                            See Most Popular Books
                                        </Typography>
                                    </button>
                                </Link>
                            </Box>
                        </div>}
                </Grid>
                <Grid item xs={isMobile ? 6 : 4}>
                    <AspectRatio
                        ratio={"1"}
                        objectFit="contain"
                        variant="plain">
                        <img
                            src={ReadingBook}
                            alt="Picture of a woman reading a book"
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />

                    </AspectRatio>
                </Grid>
                {isMobile
                    ?
                    <div>
                        <Box sx={{ ml: isMobile ? 3 : 20, mt: 5 }}>
                            <Link to="/search_book/most_popular">
                                <button
                                    className="mobile-see-popular-button">
                                    <Typography variant={isMobile ? "h6" : "h4"}>
                                        See Most Popular Books
                                    </Typography>
                                </button>
                            </Link>
                        </Box>
                    </div>
                    :
                    <div />
                }
            </Grid>
        </div>
    )
}
export default LandingPage