import Typography from '@mui/material/Typography';

const SortByIdButton: React.FC<SortButtonProps> = ({ click }) => {

    return (
        <div>
            <button 
            onClick={click}
            className="sort-button">
                <Typography variant="h6">
                    Sort by ID
                </Typography>
            </button>
        </div>
    )
}
export default SortByIdButton