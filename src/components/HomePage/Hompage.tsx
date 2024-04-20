import BookDisplay from "./BookDisplay"
import Box from "@mui/material/Box"
import LandingPage from "./LandingPage"
const Homepage: React.FC = () => {

    return (
        <div>
            <Box sx={{ mt: 10 }}>
                <LandingPage />
                <BookDisplay />
            </Box>
        </div>
    )
}
export default Homepage