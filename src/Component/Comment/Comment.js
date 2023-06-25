import "./Comment.css"
import profile from "../../Common/profile.webp"

export default function Comment({name,body}){
    return(
        <div>
            <div>
            </div>
            <div>
                <div className="name_container">
                    <img className="profile" src={profile} alt="profile" />
                <span className="name">{name}</span>
                </div>
                
            <p className="comment">{body}</p>
            </div>
            
            
        </div>
    )
}