import Box from "@mui/material/Box"
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
                <button 
                className="sort-button"
                onClick={() => {
                    setShowPopular(true);
                    setShowAscending(false);
                    setShowDescending(false);
                }}>
                    Show Most Popular
                </button>
                <button 
                className="sort-button"
                onClick={() => {
                    setShowPopular(false);
                    setShowAscending(true);
                    setShowDescending(false);
                }}
                >
                    Show by Ascending ID Number
                </button>
                <button
                    className="sort-button"
                    onClick={() => {
                        setShowPopular(false);
                        setShowAscending(false);
                        setShowDescending(true);
                    }}>
                    Show by Descending ID Number
                </button>
                {showPopular && <PopularBookDisplay />}
                {showAscending && <AscendingBookDisplay />}
                {showDescending && <DescendingBookDisplay />}
            </Box>
        </div>
    )
}
export default Homepage