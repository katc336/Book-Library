import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { useGetSingleBookQuery } from "../../redux/bookApi"
import { useParams } from "react-router-dom";

const SingleBook: React.FC = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useGetSingleBookQuery(id);
    if (isLoading) {
        return <div>Is loading...</div>
    }
    if (error) {
        console.error(error)
    }
    if (data) {
        console.log(data)
    }
    return (
        <div>
            <Box sx={{ mt: 10 }}>
            <Typography>
                {data.title}
            </Typography>
            </Box>
        </div>
    )
}
export default SingleBook
