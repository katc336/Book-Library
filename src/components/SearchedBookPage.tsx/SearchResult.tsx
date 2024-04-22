import React, { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { useParams } from "react-router-dom";
import { useGetSearchQuery } from "../../redux/bookApi";
import SortAlphabeticallyButton from './components/SortAlphabeticallyButton';
import SortByIdButton from './components/SortByIdButton';
import ResultBookDisplay from "./components/ResultBookDisplay";
import SortClearButton from "./components/SortClearButton";
import Loader from "../SharedComponents/Loader";


const SearchResults: React.FC = () => {
    const { searchBook } = useParams();
    const [bookData, setBookData] = useState({
        formats: { 'text/html': " " },
        download_count: 0,
        languages: [],
        copywrite: false,
        results: []
    });
    const [showClear, setShowClear] = useState(false);
    const { data, isLoading, error } = useGetSearchQuery(searchBook);

    useEffect(() => {
        if (isLoading) {
            return;
        }
        if (error) {
            console.error(error);
        }
        if (data) {
            setBookData(data);
        }
    }, [data, isLoading, error]);
    if (isLoading) {
        return <Loader />;
    }
    const sortById = (data: any) => {
        // Make a copy of the results array from the data object
        let results = data.results.slice();
        // Sort the results array by id with highest first
        results.sort((a: { id: number }, b: { id: number }) => b.id - a.id);
        // Create a new object with the sorted results
        const sortedData = { ...data, results }; // Update the results array
        setBookData(sortedData);
        setShowClear(true);
    };
    
    const sortAlphabetically = (data: any) => {
        // Make a copy of the results array from the data object
        let results = data.results.slice();
        // Sort alphabetically by title, excluding "The", "A", "An" as the first word
        results.sort((a: { title: string }, b: { title: string }) => {
            const firstTitle = a.title.toLowerCase().replace(/^(the|a|an) /, "");
            const secondTitle = b.title.toLowerCase().replace(/^(the|a|an) /, "");
            return firstTitle.localeCompare(secondTitle);
        });
        // Create a new object with the sorted results
        const sortedData = { ...data, results }; // Update the results array
        setBookData(sortedData);
        setShowClear(true);
    };
    const sortClear = (data: any) => {
        setBookData(data);
        setShowClear(false);
    };
    console.log(bookData)
    return (
        <>
            {bookData.results && bookData.results.length === 0 ?
                <Alert sx={{ mt: 15 }} severity="info">
                    <Typography variant="h4">
                        Sorry, there are no books matching your search of: {searchBook}.
                    </Typography>
                </Alert>
                : //If there ARE books with that name...
                <div>
                    <Grid
                        sx={{ mt: 15, mx: 3 }}
                        container>
                        <Grid item xs={6}>
                            <Typography variant="h3">
                                All Books With: "{searchBook}"
                            </Typography>
                        </Grid>
                        <Grid item xs={3.5} />{/* Adds spacing */}
                        <Grid item xs={2}>
                            <Typography
                                variant="h6"
                                sx={{ p: 1, textAlign: "center", backgroundColor: "#F5FAFC", border: "2px solid #114762", borderRadius: "50px" }}>
                                Total Results: {data.count}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        sx={{ mt: 15, mx: 3 }}
                        container>
                        <Grid item xs={6}>
                            <Typography sx={{ mx: 3, fontWeight: "bold", fontStyle: "italic" }}>
                                Note: Books are automatically sorted by most popular
                            </Typography>
                            <Stack direction="row">
                                <SortByIdButton click={() => sortById(bookData)} />
                                <SortAlphabeticallyButton click={() => sortAlphabetically(bookData)} />
                            </Stack>
                        </Grid>
                        <Grid item xs={3.5} />{/* Adds spacing */}
                        <Grid item xs={2}>
                            {showClear && <SortClearButton click={() => sortClear(data)} />}
                        </Grid>
                    </Grid>
                </div>
            }
            <ResultBookDisplay bookData={bookData} />
        </>
    )
}
export default SearchResults;
