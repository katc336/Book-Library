import Typography from '@mui/material/Typography';
import MobileTheme from "../../SharedComponents/MobileTheme";

const SortClearButton: React.FC<SortButtonProps> = ({ click, content }) => {
    const { isMobile } = MobileTheme();
    return (
        <div>
            <button
                onClick={click}
                className= {isMobile ? "mobile-clear-button" : "clear-button"}>
                {isMobile
                    ?
                    <Typography>
                        {content}
                    </Typography>
                    :
                    <Typography variant="h6">
                        {content}
                    </Typography>
                }
            </button>
        </div>
    )
}
export default SortClearButton