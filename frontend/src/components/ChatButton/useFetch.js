import { useState, useEffect } from 'react';
import axios from 'axios';
const useFetch = (url) => {
    const [data, setData] = useState(null);
    // const [isPending, setIsPending] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     const abortCont = new AbortController();


    //     fetch(url, { signal: abortCont.signal })
    //         .then(res => {
    //             if (!res.ok) { // error coming back from server
    //                 throw Error('could not fetch the data for that resource');
    //             }
    //             return res.json();
    //         })
    //         .then(data => {
    //             setIsPending(false);
    //             setData(data);
    //             setError(null);
    //         })
    //         .catch(err => {
    //             if (err.name === 'AbortError') {
    //                 console.log('fetch aborted')
    //             } else {
    //                 // auto catches network / connection error
    //                 setIsPending(false);
    //                 setError(err.message);
    //             }
    //         })


    //     // abort the fetch
    //     return () => abortCont.abort();
    // }, [url])






    useEffect(()=>{
        const getData = async() =>{
            try {
                const res = await axios.get(url);
                setData(res.data);   
            } catch (error) {
                console.log(error);
            }
        };
        getData()
    }, [url])



    return { data };
}

export default useFetch;