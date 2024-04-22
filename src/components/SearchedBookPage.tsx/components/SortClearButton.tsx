import Typography from '@mui/material/Typography';

const SortClearButton: React.FC<SortButtonProps> = ({ click }) => {

    return (
        <div>
            <button
                onClick={click}
                className="clear-button">
                <Typography variant="h6">
                    Clear
                </Typography>
            </button>
        </div>
    )
}
export default SortClearButton