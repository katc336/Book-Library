import Typography from '@mui/material/Typography';

const SortByPopularityButton: React.FC = () => {

    return (
        <div>
            <button className="sort-button">
                <Typography variant="h6">
                    Sort by Popularity
                </Typography>
            </button>
        </div>
    )
}
export default SortByPopularityButton