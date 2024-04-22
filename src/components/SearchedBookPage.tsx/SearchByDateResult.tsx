import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useParams } from "react-router-dom";
import { useGetSearchByDateQuery } from "../../redux/bookApi";
import SortAlphabeticallyButton from './components/SortAlphabeticallyButton';
import SortByPopularityButton from './components/SortByIdButton';
import ResultBookDisplay from './components/ResultBookDisplay';

const SearchByDateResult: React.FC = () => {
    const { start: startDate, end: endDate } = useParams();
    console.log(startDate);
    console.log(endDate);

    const { data, isLoading, error } = useGetSearchByDateQuery({ start: startDate, end: endDate });
    if (isLoading) {
        return <Box sx={{ mt: 15 }}>Loading...</Box>
    }
    if (error) {
        console.error(error)
    }
    if (data) {
        console.log(data)
    }
    return (
        <>
            {data.results.length === 0
                ? //If there are NO books with that topic...
                <Alert
                    sx={{ mt: 15 }}
                    severity="info">
                    <Typography variant="h4">
                        Sorry, there is no books with authors from: {startDate}-{endDate}
                    </Typography>
                </Alert>
                : //If there ARE books with that topic...
                <div>
                    <Typography
                        sx={{ mt: 15, ml: 3 }}
                        variant="h3">
                        All Books with Authors Alive During:  {startDate}-{endDate}
                    </Typography>
                    {/* <Stack direction="row">
                        <SortByPopularityButton />
                        <SortAlphabeticallyButton />
                    </Stack> */}
                </div>
            }
            <ResultBookDisplay bookData={data} />
        </>
    )
}
export default SearchByDateResult;
