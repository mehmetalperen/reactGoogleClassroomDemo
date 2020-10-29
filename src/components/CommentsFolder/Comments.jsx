import React, {useState} from 'react'
import NewComment from './newComment'
import PreComments from './prevComments'
import './Comments.css'



function Comments(){

    const [commentsList, setCommentsList] = useState([]);



    const handleAddComment = newComment => {
        console.log(commentsList)
        let commetObj = {
            id: commentsList.length,
            comment: newComment,
            timeCreated: {
                month: new Date().getMonth(),
                day: new Date().getDate()
            }
        }

        
        setCommentsList(prevComments => {return [...prevComments, commetObj]}); //WTF!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    }
    




    return(
        <div>
            
            <div className="comment-container" style={{marginBottom: "20px"}}>
                <NewComment onAdd={handleAddComment} />
            </div>

            <div className="prevComment-container">
            {commentsList.map(el => {
                return (<PreComments key={el.id} id={el.id} date={el.timeCreated} comment={el.comment}/>)
            })}
                 
            </div>
        </div>
    )
}

export default Comments;