import "./Main.css";
import URL from "../../API/API";
import { useContext, useEffect, useReducer, useState } from "react";
import FetchApi from "../../CustomHook/FetchApi";
import _ from "lodash";
import Posts from "../Posts/Posts";
import arrowL from "../../Common/arrowL.png";
import arrowR from "../../Common/arrowR.png";
import { themeContext } from "../../Context/Theme-context";
import background from "../../Common/nature.jpg"



function reducer(no,action){
          switch(action.type){
            case "SEE" : return action.payload;
            default: return no;
          }
}

export default function Main() {
  const [posts, SetPosts] = useState([]);
  const [no,dispatch] = useReducer(reducer,15)
  let {dark,theme,toggle} = useContext(themeContext); 


  function handleClick(e) {
    e.preventDefault();
  }

  let fewPost = posts ? _.sampleSize(posts, no) : null;

  let post = fewPost?.map((e) => {
    return (
      <div className="home_row">
        <Posts
          key={e.id}
          id={e.id}
          userId={e.userId}
          title={e.title}
          body={e.body}
        />
      </div>
    );
  });
  useEffect(() => {
    fetch(URL.POSTS)
      .then((res) => res.json())
      .then((data) => SetPosts(data))
      .catch();
  }, []);

  return (
    <div className="main"
    style={{backgroundColor:theme.background, color:theme.color}}

    >
      <div className="promo" style={{ backgroundImage: `url(${background})` }}>
        <div onClick={handleClick}>
          <img className="arrow" src={arrowL} alt="icon" />
        </div>
        <div onClick={handleClick}>
          <img className="arrow" src={arrowR} alt="icon" />
        </div>
      </div>

      {post}
      <div className="posts">
          <button onClick={()=>{
            dispatch({
              type:"SEE",
              payload:100
            })
          }}>See All</button>
          <button
          onClick={()=>{
            dispatch({
              type:"SEE",
              payload:10
            })
          }}
          >See 10</button>
          <button
          onClick={()=>{
            dispatch({
              type:"SEE",
              payload:20
            })
          }}
          >See 20</button>
          <button
          onClick={()=>{
            dispatch({
              type:"SEE",
              payload:30
            })
          }}
          >See 30</button>
          <button
          onClick={()=>{
            dispatch({
              type:"SEE",
              payload:40
            })
          }}
          >See 40</button>
          <button
          onClick={()=>{
            dispatch({
              type:"SEE",
              payload:50
            })
          }}
          >See 50</button>
          <button
          onClick={()=>{
            dispatch({
              type:"SEE",
              payload:60
            })
          }}
          >See 60</button>
          <button
          onClick={()=>{
            dispatch({
              type:"SEE",
              payload:70
            })
          }}
          >See 70</button>
          <button
          onClick={()=>{
            dispatch({
              type:"SEE",
              payload:80
            })
          }}
          >See 80</button>
          <button
          onClick={()=>{
            dispatch({
              type:"SEE",
              payload:90
            })
          }}
          >See 90</button>
      </div>
    </div>
  );
}
