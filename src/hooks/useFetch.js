import { useState } from "react";

const useFetch = () => {
    const [data, setData] = useState();
    const [errorMsg, setErrorMsg] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const getData = (url, apiMethod) => {

            (async () => {
                setIsLoading(true);
                    fetch(url, {method: apiMethod})
                    .then(response => {
                        if(response.status === 200) {
                            return response.json();
                        } else {
                            setErrorMsg(response.statusText)
                        }
                        
                    })
                    .then(data => {
                        setData(data);
                        setIsLoading(false);
                    })
                    .catch((error)=> setErrorMsg(error.message))
                    .finally(()=>setIsLoading(false))
                }
            )();
    }
    return { data, errorMsg , isLoading, getData};
}

export default useFetch;