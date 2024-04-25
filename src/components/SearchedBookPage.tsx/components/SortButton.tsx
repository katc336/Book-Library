import Typography from '@mui/material/Typography';

const SortButton: React.FC<SortButtonProps> = ({ click, content }) => {

    return (
        <div>
            <button
                onClick={click}
                className="sort-button">
                <Typography variant="h6">
                  {content}
                </Typography>
            </button>
        </div>
    )
}
export default SortButton