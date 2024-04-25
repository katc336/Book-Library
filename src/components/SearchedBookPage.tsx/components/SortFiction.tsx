import Typography from '@mui/material/Typography';

const SortFiction: React.FC<SortButtonProps> = ({ click }) => {

    return (
        <div>
            <button
                onClick={click}
                className="sort-button">
                <Typography variant="h6">
                    Fiction
                </Typography>
            </button>
        </div>
    )
}
export default SortFiction