import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { useGetSingleBookQuery } from "../../redux/bookApi"
import { useParams } from "react-router-dom";
import BookDetails from "./components/BookDetails"
import TitleAndTranslator from "./components/TitleAndTranslator"
import Loader from "../SharedComponents/Loader"
import MobileTheme from "../SharedComponents/MobileTheme"

const SingleBook: React.FC = () => {
    const { isMobile } = MobileTheme();
    const { id } = useParams();
    const { data, error, isLoading } = useGetSingleBookQuery(id);
    if (isLoading) {
        return <Loader />
    }
    if (error) {
        console.error(error)
    }
    if (data) {
        console.log(data)
    }
    return (
        <div>
            <Stack direction="row">
                <Box sx={{
                    py: 10,
                    pl: 3,
                    backgroundImage: "linear-gradient(to bottom, #b7e2f7, #bce3f7, #c0e5f8, #c5e6f8, #c9e8f8, #cdeaf8, #d0ebf9, #d4edf9, #d8effa, #dcf1fa, #e1f3fb, #e5f5fc)",
                    mt: isMobile ? 25 : 15,
                    width: "100vw",
                    position: "relative",
                }}>
                    <Grid container>
                        <Grid item xs={isMobile ? 9 : 10.5}>
                            <TitleAndTranslator bookData={data} />
                        </Grid>
                        <Grid item xs={isMobile ? 3 : 1.5}>
                            <Box sx={{
                                m: 2,
                                p: 2,
                                backgroundColor: "#F5FAFC",
                                border: "2px solid #114762",
                                borderRadius: "50px"
                            }}>
                                <Typography>
                                    Book ID #{data.id}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <img
                        className={isMobile ? "mobile-single-book-img" : "single-book-img"}
                        width={isMobile ? "50%" : "23%"}
                        src={data.formats['image/jpeg']} alt={data.title}
                    />
                </Box>
            </Stack>
            <Box sx={{ mt: isMobile ? 10 : 0 }}>
                <BookDetails bookData={data} />
            </Box>
        </div>
    )
}
export default SingleBook
