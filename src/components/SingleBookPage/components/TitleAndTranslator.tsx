import Typography from "@mui/material/Typography"

const TitleAndTranslator: React.FC<BookAuthorProps> = ({ bookData }) => {
    const shortTitle = (data: Title) => {
        //TO DO: Fix function to not cut off mid word
        const bookTitle = data.title;
        if (bookTitle.length <= 30) {
            return bookTitle;
        } else {
            let shortenedTitle = bookTitle.substring(0, 30);
            return shortenedTitle + '...';
        }
    }
    return (
        <div>
            <Typography variant="h3">
                {shortTitle(bookData)}
            </Typography>
            <Typography
                sx={{ mr: 20 }}
                variant="h5">
                Written by: {bookData.authors.map((author: Author) => (
                    author.name
                ))}
            </Typography>
            {bookData.translators.length === 0
                ? //Return empty div if no translator
                <div />
                : //If there is/are a translator(s)...
                <div>
                    <Typography
                        sx={{ mr: 40 }}
                        variant="h6">
                        Translated by: {bookData.translators.map((author: Author) => (
                            author.name
                        ))}
                    </Typography>
                </div>
            }
        </div>
    )
}
export default TitleAndTranslator