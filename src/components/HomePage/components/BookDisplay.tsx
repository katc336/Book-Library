import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BookDisplay: React.FC<BookDetailsProps> = ({ bookData }) => {
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
                {bookData && bookData.results.map((book: Book) => (
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
export default BookDisplay