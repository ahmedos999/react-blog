import { useEffect,useState} from "react";

const useFetch = (URL) =>{
    //Define all the stats needed for the webpage
    const [data,setData] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        const abortCont = new AbortController()
        setTimeout(()=>{ // a Timeout for the Loading to apper
            fetch(URL,{signal:abortCont.signal}).then(res=>{//here you fetch the data from the API end point in JSON format 
            if(!res.ok){//catch if there is any server errors
                throw Error('Could not Connect to Server')
            }
             return res.json();
             }).then(data=>{
            setData(data);
            setIsPending(false);
            setError(false)
            }).catch(err => {
                if(err.name ==='AbortError'){
                    console.log('fetch aborted')
                }else{
                    setIsPending(false)
                    setError(err.message)  
                }
                })
            },1000)
        return ()=> abortCont.abort();
    },[URL]);

    return {data,isPending,error}
}

export default useFetch;