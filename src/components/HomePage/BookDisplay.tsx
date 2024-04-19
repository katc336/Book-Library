import { useGetBooksQuery } from '../../redux/bookApi'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Typography } from '@mui/material';

const BookDisplay: React.FC = () => {
    const [page, setPage] = useState(1)
    const { data, error, isLoading } = useGetBooksQuery(page);
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
                                width="140"
                                height="200"
                                src={book.formats['image/jpeg']} alt={book.title} />
                        </Link>
                    </Box>
                ))}
            </Stack>
            <Grid container>
                <Grid item xs={6}>
                    <button
                        onClick={() => { setPage(page - 1) }}
                        className="book-detail-button">
                        <Typography
                            sx={{ p: 1, width: 100 }}>
                            Previous
                        </Typography>
                    </button>
                </Grid>
                <Grid item xs={4} />{/* Adds spacing */}
                <Grid item xs={2}>
                    <button
                        onClick={() => setPage(page + 1)}
                        className="book-detail-button">
                        <Typography sx={{ p: 1, width: 100 }}>
                            Next
                        </Typography>
                    </button>
                </Grid>
            </Grid>
        </div>
    )
}
export default BookDisplay
