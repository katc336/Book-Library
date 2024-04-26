import Typography from "@mui/material/Typography"
import { useNavigate } from "react-router-dom";
import MobileTheme from "../../SharedComponents/MobileTheme";

const BookSubject: React.FC<BookDetailsProps> = ({ bookData }) => {
    const { isMobile } = MobileTheme();
    const navigate = useNavigate();
    const handleClick = (subject: string) => {
        if (subject.length === 0) {
            console.log("No searched item")
        } else {
            navigate(`/search_book/topic/${subject}`)
        }
    }
    return (
        <div>
            <Typography
                sx={{ mx: 1, mt: 5 }}
                variant={isMobile ? "h6" : "h5"}>
                See Related Books:
            </Typography>
            {bookData.subjects.map((subject) => (
                <button
                    onClick={() => { handleClick(subject) }}
                    key={subject}
                    className="subject-button">
                    {isMobile
                        ?
                        <Typography>
                            {subject}
                        </Typography>
                        :
                        <Typography variant="h6">
                            {subject}
                        </Typography>
                    }
                </button>
            ))}
        </div>
    )
}

export default BookSubject