import {useState, useEffect} from 'react';

const UseFetch = (url) =>{
    const[data, setData] = useState(null);
    
    useEffect(()=>{
        const getData = async (url) =>{
            let response = await fetch(url);
            let responseJson = await response.json();
                console.log(responseJson);
            setData(responseJson);
        }
        getData(url);
    }, [url]);

    return({data});
}

export default UseFetch;