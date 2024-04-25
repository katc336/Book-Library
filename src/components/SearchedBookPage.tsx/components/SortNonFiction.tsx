import Typography from '@mui/material/Typography';

const SortNonFiction: React.FC<SortButtonProps> = ({ click }) => {

    return (
        <div>
            <button
                onClick={click}
                className="sort-button">
                <Typography variant="h6">
                    Non Fiction
                </Typography>
            </button>
        </div>
    )
}
export default SortNonFiction