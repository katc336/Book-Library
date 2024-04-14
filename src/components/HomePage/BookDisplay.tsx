import { useGetBooksQuery } from '../../redux/bookApi'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

const BookDisplay: React.FC = () => {
    const { data, error, isLoading } = useGetBooksQuery({});
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        console.error(error)
    }
    if (data) {
        console.log(data.results)
    }
    return (
        <div>
            <Stack direction="row" flexWrap="wrap">
                {data && data.results.map((book: Book) => (
                    <Box
                        sx={{ mt: 15, mx: 3 }}
                        key={book.id}>
                        <Link to={`/book/${book.id}`}>
                            <img
                                width="150"
                                height="230"
                                src={book.formats['image/jpeg']} alt={book.title} />
                        </Link>
                    </Box>
                ))}
            </Stack>
        </div>
    )
}
export default BookDisplay
