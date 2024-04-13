import BookDisplay from "./BookDisplay"
import Box from "@mui/material/Box"
const Homepage: React.FC = () => {

    return (
        <div>
            <Box sx={{ mt: 10 }}>
                <BookDisplay />
            </Box>
        </div>
    )
}
export default Homepage