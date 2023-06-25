import { useEffect, useState } from "react"
import "./MyFavourite.css"
import URL from "../../API/API"
import { useNavigate } from "react-router-dom";


export default function MyFavourite({title,userId,body,id}){
    const [author,setAuthor] = useState();
    let navigate = useNavigate();

    useEffect(()=>{
        fetch(URL.AUTHOR+userId)
        .then(res=>res.json())
        .then(([data])=>setAuthor(data))
    },[])


    function routeToPost(e){

        const state = {id:id,userId:userId,body:body,title:title}
        navigate("/blog-for-ingeniumedu/post",{state})
    }

    return(
        <div className="myfav_container">
            <div className="myfav_box">
                        <p onClick={routeToPost} style={{fontSize:"1.3em",margin:"2px",cursor:"pointer"}}>{title}</p>
                        <p style={{fontSize:"1em",margin:"2px"}}>by {author?.name}</p>
                    </div>  
                    <div>
                    </div>         
        </div>
        
    )
}