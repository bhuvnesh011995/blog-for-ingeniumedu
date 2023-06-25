import { useEffect, useState } from "react"
import "./Posts.css"
import heart from "../../Common/heat.png"
import heartfav from "../../Common/heatFav.png"
import { useNavigate } from "react-router-dom"
import image from "../../Common/random.jpg"

let initialread = {
    body:false,
    title:false
}

export default function Posts({userId,id,title,body}){
const [readMore , setReadMore] = useState(false);
const [fav,setFav] = useState(false);
let navigate = useNavigate();


useEffect(()=>{
    if(JSON.parse(localStorage.getItem("fav"))?.includes(id)){ 
        setFav(true)
    }
},[])

function handleFav(e){
    if(fav){
        let favouritePost = JSON.parse(localStorage.getItem("fav")).filter(e=>{return e!=id})
        
        localStorage.setItem("fav",JSON.stringify(favouritePost))
    }
    else{
        let favouritePost = JSON.parse(localStorage.getItem("fav"))||[]
        localStorage.setItem("fav",JSON.stringify([...favouritePost,id]))
    }
    setFav(!fav)
}

function routeToPost(e){

    const state = {id:id,userId:userId,body:body,title:title}
    navigate("/blog-for-ingeniumedu/post",{state})
}

    return(
        <span className="post_container">
            <span className="postInfo">
                <img 
                onClick={routeToPost}
                style={{cursor:"pointer"}} 
                src={image} 
                alt="postImg" />
                <span className="title_container">
                    <p 
                    onClick={routeToPost}
                    className="title">
                        {`${title.substring(0,20)}..`}</p>
                    <img 
                    onClick={handleFav}
                    src={!fav?heart:heartfav} 
                    alt="favIcon" />
                </span>
            
            <span>
                <span className="body">{readMore? body : `${body.substring(0,50)}...`}</span>
                <button onClick={e=>setReadMore(!readMore)}>{!readMore?"read more":"read less"}</button>
            </span>
            
            </span>
            
        </span>
    )
}