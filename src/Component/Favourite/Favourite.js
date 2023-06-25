import "./Favourite.css"
import URL from "../../API/API"
import { useContext, useEffect, useState } from "react"
import { json } from "react-router-dom";
import MyFavourite from "./MyFavourite";
import { themeContext } from "../../Context/Theme-context";


export default function Favourite(){
    let {dark,theme,toggle} = useContext(themeContext); 

    
const [post,setPost] = useState();

let locPost = JSON.parse(localStorage.getItem("fav"))
if(locPost&&locPost.length>0){
    var myFav = post?.map(e=>{
    if(locPost.includes(e.id)){
        return(
            <div className="myfav_row">
                <MyFavourite 
                key={e.id}
                title={e.title}
                userId={e.userId}
                body={e.body}
                id={e.id}
                 />
            </div>
        )
    }
})
}
useEffect(()=>{
    fetch(URL.POSTS)
    .then(res=>res.json())
    .then(data=>setPost(data))
    window.scrollTo(0, 0)
},[])

    return(
        <div
        style={{backgroundColor:theme.background, color:theme.color}}
        className="myfav_container">
            <h1 className="favtitle">
            My Favourite
            </h1>
                <div className="myfav">
                    { myFav?.length? myFav : "No Favourite Post"}
            </div>
        </div>
    )
}