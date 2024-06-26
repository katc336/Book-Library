import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import NavButton from "./NavButton";
import { motion } from "framer-motion";
import { useState } from "react";
import SearchByDate from "./Search/SearchByDate";
import SearchByTopic from "./Search/SearchByTopic";
import { useNavigate } from "react-router-dom";
import MobileTheme from "../SharedComponents/MobileTheme";

const DropDown: React.FC = () => {
    const [showDateSearch, setShowDateSearch] = useState(false);
    const [showTopicSearch, setShowTopicSearch] = useState(false);
    const buttonVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
    };
    const navigate = useNavigate();
    const { isMobile } = MobileTheme();
    
    return (
        <div>
            <Box sx={{ 
                ml: isMobile ? 1 :3 }}>
                <Grid container spacing={3}>
                    <Grid item xs={isMobile ? 12 :2}>
                        <Typography
                            variant="h5"
                            sx={{ mt: 1.5, color: "#100937" }}>
                            Search By:
                        </Typography>
                    </Grid>
                    <Grid item xs={isMobile ? 12 :2}>
                        <NavButton
                            setNew={() => {
                                navigate(`/search_book/topic/${"fiction"}`)
                            }}
                            navWord="Fiction" />
                    </Grid>
                    <Grid item xs={isMobile ? 12 :2}>
                        <NavButton
                            setNew={() => {
                                navigate(`/search_book/topic/${"nonfiction"}`)
                            }}
                            navWord="Non Fiction" />
                    </Grid>
                    <Grid item xs={isMobile ? 12 :2}>
                        <NavButton
                            setNew={() => {
                                setShowDateSearch(true);
                                setShowTopicSearch(false);
                            }}
                            navWord="Date" />
                    </Grid>
                    <Grid item xs={isMobile ? 12 :2}>
                        <NavButton
                            setNew={() => {
                                setShowTopicSearch(true);
                                setShowDateSearch(false);
                            }}
                            navWord="Topic" />
                    </Grid>
                </Grid>
                {showDateSearch &&
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={buttonVariants}
                        transition={{ duration: 0.5 }}
                    >
                        <SearchByDate />
                    </motion.div>
                }
                {showTopicSearch &&
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={buttonVariants}
                        transition={{ duration: 0.5 }}
                    >
                        <SearchByTopic />
                    </motion.div>}
            </Box>
        </div>
    )
}
export default DropDown