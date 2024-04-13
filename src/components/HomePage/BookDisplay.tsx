import { useGetBooksQuery } from '../../redux/bookApi'
import Box from '@mui/material/Box';

const BookDisplay: React.FC = () => {
    const { data, error, isLoading } = useGetBooksQuery({});
    if (isLoading) {
        return <div>Is loading...</div>
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
                <Box>
                    {book.title}
                </Box>
            ))}
        </div>
    )
}
export default BookDisplay