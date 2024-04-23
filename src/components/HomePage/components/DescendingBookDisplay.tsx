import { useGetByDescendingQuery } from '../../../redux/bookApi'
import { useState } from 'react';
import Loader from '../../SharedComponents/Loader';
import BookDisplay from './BookDisplay';
import PreviousAndNextButtons from '../../SearchedBookPage.tsx/components/PreviousAndNextButtons';

const DescendingBookDisplay: React.FC = () => {
    const [page, setPage] = useState(1)
    const { data, error, isLoading } = useGetByDescendingQuery(page);
    if (isLoading) {
        return <Loader />
    }
    if (error) {
        console.error(error)
    }
    if (data) {
        console.log(data.results)
    }
    return (
        <div>
          <BookDisplay bookData={data} />
          <PreviousAndNextButtons
                previous={() => setPage(page - 1)}
                next={() => setPage(page + 1)}
            />
        </div>
    )
}
export default DescendingBookDisplay