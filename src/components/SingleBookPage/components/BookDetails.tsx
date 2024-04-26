import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { Link } from "react-router-dom";
import Languages from "./Languages";
import BookSubject from "./BookSubject";
import MobileTheme from "../../SharedComponents/MobileTheme";

const BookDetails: React.FC<BookDetailsProps> = ({ bookData }) => {
    const { isMobile } = MobileTheme();
    return (
        <div>
            <Grid container>
                <Grid item xs={isMobile ? 12 : 3} container>
                    <Stack direction="column">
                        <Link to={bookData.formats['text/html']}>
                            <button className={isMobile ? "mobile-book-detail-button" : "book-detail-button"}>
                                <Stack direction="row">
                                    <Typography
                                        sx={{ mx: isMobile ? 3 : 3, fontWeight: isMobile ? "none" : "bold", mt: 1 }}
                                        variant="h6">
                                        Read Online
                                    </Typography>
                                    <AutoStoriesIcon sx={{ mx: isMobile ? 0 : 4, fontSize: isMobile ? "40px" : "50px" }} />
                                </Stack>
                            </button>
                        </Link>
                        <Box className="book-detail" />{/* Adds a line */}
                        <Box className="book-detail">
                            <Typography
                                sx={{ mx: 3, my: 1 }}
                                variant="h6">
                                Downloads: {bookData.download_count}
                            </Typography>
                        </Box>
                        <Box className="book-detail">
                            <Typography
                                sx={{ mx: 3, my: 1 }}
                                variant="h6">
                                {bookData.copywrite === true
                                    ?
                                    <div>Copywrited</div>
                                    :
                                    <div>Public Domain</div>
                                }
                            </Typography>
                        </Box>
                        <Box className="book-detail">
                            <Typography
                                sx={{ mx: 3, }}
                                variant="h6">
                                Languages:
                            </Typography>
                            <Languages bookData={bookData} />
                        </Box>
                    </Stack>
                </Grid>
                <Grid item xs={11}>
                    <BookSubject bookData={bookData} />
                </Grid>
            </Grid>
        </div>
    )
}
export default BookDetails
