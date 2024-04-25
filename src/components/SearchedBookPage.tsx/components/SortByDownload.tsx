import SortButton from "./SortButton";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CancelIcon from '@mui/icons-material/Cancel';
import SortByDownloadForm from "./SortByDownloadForm";
import { useState } from "react";

const SortByDownload: React.FC<SortByDownloadFormProps> = ({ handleSortByDownload }) => {
    const [showCountInput, setShowCountInput] = useState(false);
    const [showButton, setShowButton] = useState(true);
    return (
        <div>
            <Box sx={{
                ml: showCountInput ? 5 : 3,
                mr: 100,
                my: showCountInput ? 3 : 0, 
                pt: 1,
                pb: 5,
                border: showCountInput ? "1px solid #62709e" : "",
                borderRadius: showCountInput ? "20px" : "",
                boxShadow: showCountInput ? "2px 2px 5px #032b32" : "",
            }}>
                <Grid container>
                    <Grid item xs={11}>
                        {showButton &&
                            <SortButton
                                click={() => {
                                    setShowCountInput(true)
                                    setShowButton(false);
                                }}
                                content="Find by Download Count"
                            />
                        }
                    </Grid>
                    <Grid item xs={1}>
                        {showCountInput &&
                            <button
                                style={{ border: "none", backgroundColor: "transparent" }}
                                onClick={() => {
                                    setShowCountInput(false);
                                    setShowButton(true);
                                }} >
                                <CancelIcon
                                    sx={{ color: "#114762" }}
                                    fontSize="large" />
                            </button>
                            }
                    </Grid>
                    {showCountInput && <SortByDownloadForm handleSortByDownload = { handleSortByDownload }  />}
                </Grid>
            </Box>
        </div>
    )
}
export default SortByDownload