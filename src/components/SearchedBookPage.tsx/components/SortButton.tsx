import Typography from '@mui/material/Typography';
import MobileTheme from "../../SharedComponents/MobileTheme";

const SortButton: React.FC<SortButtonProps> = ({ click, content }) => {
    const { isMobile } = MobileTheme();
    return (
        <div>
            <button
                onClick={click}
                className={isMobile ? "mobile-sort-button" : "sort-button"}>
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
export default SortButton