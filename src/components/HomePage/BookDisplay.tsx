import { useGetBooksQuery } from '../../redux/bookApi'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
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
    const shortenedTitle = (data: Title) => {
        const bookTitle = data.title;
        const specialChars = [":", ";", "-"];
        let indexToCut = bookTitle.length;
        for (let char of specialChars) {
            const index = bookTitle.indexOf(char);
            if (index !== -1 && index < indexToCut) {
                indexToCut = index;
            }
        }
        if (indexToCut <= 30) {
            return bookTitle.substring(0, indexToCut);
        } else {
            return bookTitle.substring(0, 15) + '...';
        }
    }
    return (
        <div>
            <Stack direction="row" flexWrap="wrap">
                {data && data.results.map((book: Book) => (
                    <Box
                        sx={{ mt: 15, mx: 3 }}
                        key={book.id}>
                        <Stack direction="column">
                                <Card
                                    elevation={10}
                                    sx={{
                                        py: 2,
                                        width: "16vw",
                                        height: 250
                                    }}
                                >
                                    <Link to={`/book/${book.id}`} style={{ textDecoration: 'none' }}>
                                        <Typography sx={{ mb: 1, textAlign: "center" }}>
                                            {shortenedTitle(book)}
                                        </Typography>
                                        <Typography textAlign="center">
                                            <img
                                                style={{
                                                    maxWidth: "150px",
                                                    maxHeight: "220px",
                                                }}
                                                src={book.formats['image/jpeg']}
                                                alt={book.title}
                                            />
                                        </Typography>
                                    </Link>
                                </Card>
                        </Stack>
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
