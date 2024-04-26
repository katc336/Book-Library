import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { useState } from "react"
import LandingPage from "./components/LandingPage"
import AscendingBookDisplay from "./components/AscendingBookDisplay"
import PopularBookDisplay from "./components/PopularBookDisplay"
import DescendingBookDisplay from "./components/DescendingBookDisplay"

const Homepage: React.FC = () => {
    const [showPopular, setShowPopular] = useState(false);
    const [showAscending, setShowAscending] = useState(true);
    const [showDescending, setShowDescending] = useState(false);
    return (
        <div>
            <Box sx={{ mt: 10 }}>
                <LandingPage />
                <Typography
                    variant="h3"
                    sx={{ mt: 20, mb: 5, mx: 3 }}>
                    Explore the Gutenberg Library:
                </Typography>
                <button
                    className="sort-button"
                    onClick={() => {
                        setShowPopular(true);
                        setShowAscending(false);
                        setShowDescending(false);
                    }}>
                    <Typography variant="h6">
                        Show by Popularity
                    </Typography>
                </button>
                <button
                    className="sort-button"
                    onClick={() => {
                        setShowPopular(false);
                        setShowAscending(true);
                        setShowDescending(false);
                    }}
                >
                    <Typography variant="h6">
                        Show by Ascending ID Number
                    </Typography>
                </button>
                <button
                    className="sort-button"
                    onClick={() => {
                        setShowPopular(false);
                        setShowAscending(false);
                        setShowDescending(true);
                    }}>
                    <Typography variant="h6">
                        Show by Descending ID Number
                    </Typography>
                </button>
                {showPopular && <PopularBookDisplay />}
                {showAscending && <AscendingBookDisplay />}
                {showDescending && <DescendingBookDisplay />}
            </Box>
        </div>
    )
}
export default Homepage