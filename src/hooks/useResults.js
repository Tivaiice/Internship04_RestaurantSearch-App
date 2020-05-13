import {  useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [term, setTerm] = useState("");
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async (searchTerm) => {
        // console.log('Hi there !!');
        try {
            const response = await yelp.get('/search', {
                params: {
                limit: 50,
                term: searchTerm,
                location: "san jose",
                }
        });
        // console.log('response', response)
        setResults(response.data.businesses);
        } catch (err) {
        // console.log(err);
        setErrorMessage('Something went wrong !!');
        }
    };

    useEffect(() => {
        searchApi('food');
    }, [])

    return [searchApi, results , errorMessage];
};