import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { MagnifyingGlass } from "react-loader-spinner"
const Loader = () => {
    return (
        <div>
            <Box sx={{ mt: 15 }}>
                <Stack direction="column">
                    <Typography
                        variant="h4"
                        sx={{ textAlign: "center " }}>
                        Loading Books...
                    </Typography>
                    <Typography sx={{ textAlign: "center " }}>
                        <MagnifyingGlass
                            visible={true}
                            height="300"
                            width="300"
                            ariaLabel="magnifying-glass-loading"
                            wrapperStyle={{}}
                            wrapperClass="magnifying-glass-wrapper"
                            glassColor="#c0efff"
                            color="#5a83aa"
                        />
                    </Typography>
                </Stack>
            </Box>
        </div>
    )
}
export default Loader