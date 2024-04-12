import { Typography } from '@mui/material';
import './App.css'
import { useGetBooksQuery } from './redux/bookApi'

function App() {
const {data, error, isLoading } = useGetBooksQuery({});
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
    <>
    <Typography>
     
    </Typography>
    </>
  )
}

export default App
