import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { useState } from "react";
import SearchBar from "./Search/SearchBar";
import DropDown from "./DropDown";
import MobileTheme from "../SharedComponents/MobileTheme";

const MobileNavBar: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showSearchBar, setShowSerachBar] = useState(true);
    const variants = {
        hidden: { height: 50 },
        visible: { height: 100 },
    };
    const buttonVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
    };
    const { isMobile } = MobileTheme();
    return (
        <div>
            <AppBar
                elevation={0}
                sx={{
                    backgroundColor: "#b7e2f7",
                    pt: 3,
                    pb: 8
                }}>
                <motion.div
                    initial="hidden"
                    animate={showMenu ? "visible" : "hidden"}
                    variants={variants}
                    transition={{ duration: 0.5 }}
                >
                    <Grid container>
                        <Grid item xs={10}>
                            <Typography 
                            variant="h4"
                            sx={{ mx: 3, color: "#100937", mr: "10%" }}>
                                Gutenberg Library
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <div className="container">
                                <input
                                    className="click"
                                    type="checkbox"
                                    onChange={(event) => {
                                        if (event.target.checked) {
                                            setShowMenu(true);
                                            setShowSerachBar(false);
                                        } else {
                                            setShowMenu(false)
                                            setShowSerachBar(true);
                                        }
                                    }}
                                />
                                {/*Bars that will rotate*/}
                                <div className="div1"></div>
                                <div className="div2"></div>
                                <div className="div3"></div>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            {
                                showSearchBar && <SearchBar />
                            }
                        </Grid>
                    </Grid>
                    {showMenu &&
                        <Box sx={{
                            py: 7,
                            backgroundColor: isMobile ?  "#b7e2f7" : "white",
                            borderBottom: "3px solid #100937"
                        }}>
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={buttonVariants}
                                transition={{ duration: 0.5 }}
                            >
                                <DropDown />
                            </motion.div>
                        </Box>
                    }
                </motion.div>
            </AppBar>
        </div>
    )
}
export default MobileNavBar