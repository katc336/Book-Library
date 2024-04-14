import Typography from "@mui/material/Typography"

const NavButton: React.FC<NavButtonProps> = ({ navWord }) => {
    return (
        <div>
            <button
                className="nav-button">
                <Typography sx={{ color: "#031920" }}>
                    {navWord}
                </Typography>
            </button>
        </div>
    )
}
export default NavButton