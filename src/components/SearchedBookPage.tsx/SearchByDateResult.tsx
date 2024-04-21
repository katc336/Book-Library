import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { Link, useParams } from "react-router-dom";
import { useGetSearchByDateQuery } from "../../redux/bookApi";

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
            <Typography>
                {data.results.length === 0
                    ? //If there are NO books with that search...
                    <Alert
                        sx={{ mt: 15 }}
                        severity="info">
                        <Typography variant="h4">
                            Sorry, there authors matching your search of: {startDate}-{endDate}.
                        </Typography>
                    </Alert>
                    : //If there ARE books with that name...
                    <Typography
                        sx={{ mt: 15, ml: 3 }}
                        variant="h3">
                        All Books With Authors Living during: {startDate}-{endDate}
                    </Typography>
                }
            </Typography>
            <Stack direction="row" flexWrap="wrap">
                {data && data.results.map((book: Book) => (
                    <Box
                        sx={{ mt: 15, mx: 3 }}
                        key={book.id}>
                        <Stack direction="column">
                            <motion.div whileHover={{ scale: 1.1 }}>
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
                            </motion.div>
                        </Stack>
                    </Box>
                ))}
            </Stack>
        </div>
    )
}
export default SearchByDateResult;
