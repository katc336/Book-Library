import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const LandingPage: React.FC = () => {
    return (
        <div>
            <Grid 
             sx={{ mt: 15}}
             container>
                <Grid item xs={8.5}>
                    <Typography
                        sx={{ mx: 3, color: "#031920", mr: "10%" }}
                        variant="h1">
                        Expand your literary horizons 
                        with the Gutenberg Collection
                    </Typography>
                   
                </Grid>
                <Grid item xs={3.5}>
                    <img /> {/* image will go here */}
                    <button className="search-button">
                        <Typography variant="h6">
                        Explore Most Popular Books
                        </Typography>
                    </button>
                </Grid>
            </Grid>
        </div>
    )
}
export default LandingPage