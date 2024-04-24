import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { Link } from "react-router-dom";
import Languages from "./Languages";

const BookDetails: React.FC<BookDetailsProps> = ({ bookData }) => {
    return (
        <div>
            <Box sx={{ maxWidth: 350 }}>
                <Stack direction="column">
                    <Link to={bookData.formats['text/html']}>
                        <button className="book-detail-button">
                            <Stack direction="row">
                                <Typography
                                    sx={{ mx: 3, fontWeight: "bold", mt: 1 }}
                                    variant="h6">
                                    Read Online
                                </Typography>
                                <AutoStoriesIcon sx={{ mx: 4, fontSize: "50px" }} />
                            </Stack>
                        </button>
                    </Link>
                    <Box className="book-detail" />
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
                         sx={{mx: 3,}}
                        variant="h6">
                            Languages:
                        </Typography>
                        <Languages bookData={bookData} />
                    </Box>
                </Stack>
            </Box>
        </div>
    )
}
export default BookDetails