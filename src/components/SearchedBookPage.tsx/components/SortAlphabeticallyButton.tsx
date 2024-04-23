import Typography from '@mui/material/Typography';

const SortAlphabeticallyButton: React.FC<SortButtonProps> = ({ click }) => {

    return (
        <div>
            <button
                onClick={click}
                className="sort-button">
                <Typography variant="h6">
                    Sort Page Alphabetically
                </Typography>
            </button>
        </div>
    )
}
export default SortAlphabeticallyButton