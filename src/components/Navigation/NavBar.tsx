import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { useState } from "react";
import NavButton from "./NavButton";
import SearchBar from "./SearchBar";

const WebNavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
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
                    <Stack direction="row">
                        <Typography
                            sx={{ mx: 3, color: "#031920", mr: "10%" }}
                            variant="h3">
                            Gutenberg Library
                        </Typography>
                        <Box sx={{ mr: "20%", mt: 1.5 }}>
                            <SearchBar />
                        </Box>
                        <Box
                            sx={{ direction: "rtl" }}>
                            <div className="container">
                                <input
                                    className="click"
                                    type="checkbox"
                                    onChange={(event) => {
                                        if (event.target.checked) {
                                            setShowMenu(true);
                                        } else {
                                            setShowMenu(false)
                                        }
                                    }}
                                />
                                {/*Bars that will rotate*/}
                                <div className="div1"></div>
                                <div className="div2"></div>
                                <div className="div3"></div>
                            </div>
                        </Box>
                    </Stack>
                    {showMenu &&
                        <Box sx={{
                            py: 5,
                            backgroundImage: "linear-gradient(to bottom, #ffffff, #f7f8ff, #ebf2ff, #ddecff, #cbe8fe, #bbe3fd, #a9dffc, #95dbfa, #7fd5fb, #4dc0bb);"
                        }}>
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={buttonVariants}
                                transition={{ duration: 0.5 }}
                            >
                                <Box sx={{ mx: 10, flexGrow: 1 }}>
                                    <Grid container spacing={15}>
                                        <Grid item xs={3}>
                                            <NavButton navWord="Newest" />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <NavButton navWord="Most Popular" />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <NavButton navWord="By Author" />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <NavButton navWord="By Genre" />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </motion.div>
                        </Box>
                    }
                </motion.div>
            </AppBar>
        </div>
    )
}
export default WebNavBar