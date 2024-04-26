import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import MobileTheme from "../SharedComponents/MobileTheme";

const NavButton: React.FC<NavButtonProps> = ({ navWord, setNew }) => {
    const { isMobile } = MobileTheme();
    return (
        <div>
            <Box sx={{ ml: isMobile ? 8 : 0 }}>
                <button
                    onClick={setNew}
                    className={isMobile ? "mobile-nav-button" : "nav-button"}>
                    <Typography sx={{ color: "#100937" }}>
                        {navWord}
                    </Typography>
                </button>
            </Box>
        </div>
    )
}


export default NavButton
