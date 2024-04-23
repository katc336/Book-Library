import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const PreviousAndNextButtons: React.FC<NextPrevProps> = ({previous, next}) => {
    return (
        <div>
            <Grid container>
                <Grid item xs={6}>
                    <button
                        onClick={previous}
                        className="book-detail-button">
                        <Typography
                            sx={{ p: 1, width: 100 }}>
                            Previous
                        </Typography>
                    </button>
                </Grid>
                <Grid item xs={4} />{/* Adds spacing */}
                <Grid item xs={2}>
                    <button
                        onClick={next}
                        className="book-detail-button">
                        <Typography sx={{ p: 1, width: 100 }}>
                            Next
                        </Typography>
                    </button>
                </Grid>
            </Grid >
        </div>
    )
}
export default PreviousAndNextButtons