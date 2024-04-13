import { useGetBooksQuery } from '../../redux/bookApi'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
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
            {data && data.results.map((book: Book) => (
                <Box key={book.id}>
                    <Card
                        elevation={10}
                        sx={{ p: 3 }}>
                        {book.title}
                        <Link to={`/book/${book.id}`}>
                            <Button
                                sx={{ mx: 2, textTransform: "none" }}
                                variant="contained">
                                See Book
                            </Button>
                        </Link>
                    </Card>
                </Box>
            ))}
        </div>
    )
}
export default BookDisplay