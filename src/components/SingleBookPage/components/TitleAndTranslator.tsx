import Typography from "@mui/material/Typography"

const TitleAndTranslator: React.FC<BookAuthorProps> = ({ bookData }) => {
    const shortenedTitle = (data: { title: string }) => {
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
            return bookTitle.substring(0, 30) + '...';
        }
    }
    return (
        <div>
            <Typography variant="h3">
                {shortenedTitle(bookData)}
            </Typography>
            <Typography
                sx={{ mr: 20 }}
                variant="h5">
                Written by: {bookData.authors.map((author: { name: string }) => (
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
                        Translated by: {bookData.translators.map((translator: { name: string }) => (
                            translator.name
                        ))}
                    </Typography>
                </div>
            }
        </div>
    )
}
export default TitleAndTranslator