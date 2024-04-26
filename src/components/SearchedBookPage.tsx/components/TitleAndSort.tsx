import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import SortClearButton from "../components/SortClearButton";
import SortButton from "./SortButton";

const TitleAndSort: React.FC<TitleSort> = ({
    bookData,
    data,
    search,
    search2,
    idButton,
    alphabetButton,
    clearButton,
    fictionButton,
    nonFictionButton
}) => {
    return (
        <div>
            {bookData.results && bookData.results.length === 0 ?
                <Alert sx={{ mt: 15 }} severity="info">
                    <Typography variant="h4">
                        Sorry, there are no books matching your search of: {search}.
                    </Typography>
                </Alert>
                : //If there ARE books with that name...
                <div>
                    <Grid sx={{ mt: 15, mx: 3 }} container>
                        <Grid item xs={6}>
                            <Typography variant="h3">
                                All Books With: "{search}-{search2}"
                            </Typography>
                        </Grid>
                        <Grid item xs={3.5} />{/* Adds spacing */}
                        <Grid item xs={2}>
                            <Typography
                                variant="h6"
                                sx={{ p: 1, textAlign: "center", backgroundColor: "#F5FAFC", border: "2px solid #114762", borderRadius: "50px" }}>
                                Total Results: {data.count}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        sx={{ mt: 15, mx: 3 }}
                        container>
                        <Grid item xs={8}>
                            <Typography sx={{ mx: 3, fontWeight: "bold", fontStyle: "italic" }}>
                                Note: Books are automatically sorted by popularity
                            </Typography>
                            <Stack direction="row">
                                <SortButton
                                    click={idButton}
                                    content="Sort Page By ID"
                                />
                                <SortButton
                                    click={alphabetButton}
                                    content="Sort Page Alphabetically"
                                />
                            </Stack>
                        </Grid>
                        <Grid item xs={2} />{/* Adds spacing */}
                        <Grid
                            sx={{ mt: 2.5 }}
                            item xs={2}>
                            <SortClearButton
                                click={clearButton}
                                content="Clear" />
                        </Grid>
                        <Grid item xs={12}>
                            <Stack direction="row">
                                <SortButton
                                    click={fictionButton}
                                    content="Fiction"
                                />
                                <SortButton
                                    click={nonFictionButton}
                                    content="Non Fiction"
                                />
                            </Stack>
                        </Grid>
                    </Grid>

                </div>
            }
        </div>
    )
}
export default TitleAndSort