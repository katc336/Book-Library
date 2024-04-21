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
                <Typography
                    sx={{ mt: 15, ml: 3 }}
                    variant="h3">
                    All Books with Authors Alive During:  {startDate}-{endDate}
                </Typography>
            }
            <Stack direction="row" flexWrap="wrap">
                {data.results.map((book: SearchResult) => (
                    <motion.div
                        key={book.id}
                        whileHover={{ scale: 1.1 }}>
                        <Stack direction="column">
                            <Typography
                                sx={{
                                    color: "#205375",
                                    textAlign: "center",
                                    mb: 2
                                }}>
                                {book.name}
                            </Typography>
                            <Box sx={{ m: 3 }}
                                key={book.id}>
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
                                                alt={book.name}
                                            />
                                        </Typography>
                                    </Link>
                                </Card>
                            </Box>
                        </Stack>
                    </motion.div>
                ))
                }
            </Stack>
        </>
    )
}
export default SearchByDateResult;
