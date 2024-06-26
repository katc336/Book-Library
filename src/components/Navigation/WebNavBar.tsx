import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { useState } from "react";
import SearchBar from "./Search/SearchBar";
import DropDown from "./DropDown";

const WebNavBar: React.FC = () => {
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
    return (
        <div>
            <AppBar
                elevation={0}
                sx={{
                    py: 3,
                    backgroundColor: "white"
                }}>
                <motion.div
                    initial="hidden"
                    animate={showMenu ? "visible" : "hidden"}
                    variants={variants}
                    transition={{ duration: 0.5 }}
                >
                    <Grid container>
                        <Grid item xs={4}>
                            <Typography
                                sx={{ mx: 3, color: "#100937", mr: "10%" }}
                                variant="h3">
                                Gutenberg Library
                            </Typography>
                        </Grid>
                        <Grid item xs={7}>
                            {
                                showSearchBar && <SearchBar />
                            }
                        </Grid>
                        <Grid item xs={1}>
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
                    </Grid>
                    {showMenu &&
                        <Box sx={{
                            py: 7,
                            backgroundColor: "white",
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
export default WebNavBar