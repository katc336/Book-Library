import Typography from '@mui/material/Typography';

const SortClearButton: React.FC<SortButtonProps> = ({ click, content }) => {

    return (
        <div>
            <button
                onClick={click}
                className="clear-button">
                <Typography variant="h6">
                    {content}
                </Typography>
            </button>
        </div>
    )
}
export default SortClearButton