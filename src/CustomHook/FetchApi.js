import { useEffect, useState } from "react"
import axios from "axios";


export default function FetchApi(url){
    const [data,setData] = useState([]);

    useEffect(async ()=>{
        let res = await axios.get(url)
        setData(res.data)
    },[])
    return(
        [data]
    )
}