import React, {useState} from 'react'
import NewComment from './newComment'
import PreComments from './prevComments'
import './Comments.css'
import { reverseMap } from '../util/helpers';



function Comments(){

    const [commentsList, setCommentsList] = useState([]);



    const handleAddComment = newComment => {
        let ID;
        if (commentsList.length > 0) {
            ID = commentsList[commentsList.length-1].id + 1
        } else {
            ID = 0;
        }
        let commetObj = {
            id: ID,
            comment: newComment,
            timeCreated: {
                month: new Date().getMonth(),
                day: new Date().getDate()
            }
        }

        console.log(commentsList);
        setCommentsList(prevComments => {return [...prevComments, commetObj]});
    }

    const handleDeleteComment = deleteCommentID => {
        setCommentsList(prevComments => {
            return prevComments.filter(comment => {
                return comment.id !== deleteCommentID;
            })
        })
        console.log('delete testing');
        console.log(`id: ${deleteCommentID}`);
    }
    





    return(
        <div>
            
            <div className="comment-container" style={{marginBottom: "20px"}}>
                <NewComment onAdd={handleAddComment} />
            </div>

            <div className="prevComment-container">
            {reverseMap(commentsList, el => {
                return (<PreComments key={el.id} id={el.id} date={el.timeCreated} comment={el.comment} onDeleteComment = {handleDeleteComment}/>)
            })}

                 
            </div>
        </div>
    )
}

export default Comments;