import { useLocation } from "react-router-dom";
import "./Post.css"
import { useContext, useEffect, useReducer, useState } from "react";
import URL from "../../API/API"
import Comment from "../Comment/Comment";
import heart from "../../Common/heat.png"
import heartfav from "../../Common/heatFav.png"
import { themeContext } from "../../Context/Theme-context";



export default function Post(){
    let {dark,theme,toggle} = useContext(themeContext); 
    const { state } = useLocation();
    const [fav,setFav] = useState();
    const [[user],setUser] = useState([]);
    const [comments,setComments] = useState([]);
    let {id,userId,title,body,image} = state

    const [comment,setComment] = useState({id:id,name:"",body:""})


    
    function handleComment(e){
        e.preventDefault();
        setComments([comment,...comments,])
        let locComment = JSON.parse(localStorage.getItem(`comments${id}`))||[]
        localStorage.setItem(`comments${id}`,JSON.stringify([comment,...locComment]))
        return
    }


    let COMMENTS = comments?.map((e)=>{
        return(
            <div key={id}>
                <Comment
                name={e.name}
                body={e.body}
                />
            </div>
        )
    })

    useEffect(()=>{
        fetch(URL.AUTHOR+userId)
        .then(res=>res.json())
        .then(data=>setUser(data))
        .catch()

        fetch(URL.COMMENT+id)
        .then(res=>res.json())
        .then(data=>setComments(preVal=>([...preVal,...data])))
        .catch()


        if(JSON.parse(localStorage.getItem("fav")).includes(id)){ 
            setFav(true)
        }
        let locComment = JSON.parse(localStorage.getItem(`comments${id}`))||[]

        if(locComment.length){
            setComments(preVal=>([...preVal,...locComment]))
        }
        window.scrollTo(0, 0)
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

    return(
        <div 
        style={{backgroundColor:theme.background, color:theme.color}}
        className="post">
            <div className="post_container">
                <div className="left_part">
                    <span>
                        <span className="posttitle">{title}</span>
                        <img 
                        className="img"
                    onClick={handleFav}
                    src={!fav?heart:heartfav} 
                    alt="favIcon" />
                    </span>
                    
                    <span className="author"><strong>Author - </strong><i>{user?.name}</i></span>
                    <span className="username"><strong>Username - </strong><i>{user?.username}</i></span>
                    <span className="email"><strong>Email - </strong><i>{user?.email}</i></span>
                    <spam className="phone"><strong>Mobile No -</strong><i>{user?.phone}</i> </spam>
                    <span className="website"><strong>website -</strong><i>{user?.website}</i> </span>
                </div>
                <div className="right_part">
                    <p className="pbody">{body}</p>
                    <p className="pbody">{body}</p>
                    
                </div>
            </div>
            <div>
            <p className="pbody">{body}</p>
            <p className="pbody">{body}</p>
            <p className="pbody">{body}</p>
            <p className="pbody">{body}</p>
            <p className="pbody">{body}</p>
            <p className="pbody">{body}</p>
            </div>
            <div className="comment_container">
            <div className="add_comment">
                <input 
                className="com"
                onChange={e=>setComment(preVal=>({...preVal,name:e.target.value}))}
                placeholder="name" />
                <input 
                className="com"
                onChange={e=>setComment(preVal=>({...preVal,body:e.target.value}))}
                placeholder="comment.." />
                <button
                className="com"
                onClick={handleComment}
                >Add Comment</button>
            </div>
            <strong>Comments</strong>
                    {COMMENTS}
            </div>
        </div>
    )
}