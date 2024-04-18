import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { useGetSingleBookQuery } from "../../redux/bookApi"
import { useParams } from "react-router-dom";
import BookDetails from "./components/BookDetails"
import TitleAndTranslator from "./components/TitleAndTranslator"

const SingleBook: React.FC = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useGetSingleBookQuery(id);
    if (isLoading) {
        return <div>Is loading...</div>
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
                    mt: 15,
                    width: "100vw",
                    position: "relative",
                }}>
                    <Grid container>
                        <Grid item xs={10.5}>
                            <TitleAndTranslator bookData={data} />
                        </Grid>
                        <Grid item xs={1.5}>
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
                        className="single-book-img"
                        width="23%"
                        src={data.formats['image/jpeg']} alt={data.title}
                    />
                </Box>
            </Stack>
            <BookDetails bookData={data} />
        </div>
    )
}
export default SingleBook
