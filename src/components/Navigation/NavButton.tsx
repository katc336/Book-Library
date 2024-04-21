import Typography from "@mui/material/Typography"

const NavButton: React.FC<NavButtonProps> = ({ navWord, setNew }) => {
    return (
        <div>
            <button
                onClick={setNew}
                className="nav-button">
                <Typography sx={{ color: "#031920" }}>
                    {navWord}
                </Typography>
            </button>
        </div>
    )
 }
 
 
 export default NavButton
 