import React, {useState} from 'react'
import NewComment from './newComment'
import PreComments from './prevComments'
import './Comments.css'
import { reverseMap } from '../util/helpers';



function Comments(){

    const [commentsList, setCommentsList] = useState([]);
    const [scheduledPosts, setScheduledPosts] = useState([]);

    const HandleAddScheduledPost = scheduledPostObj => {
        setScheduledPosts(previousPost => {
            return [...previousPost, {
                comment: scheduledPostObj.comment,
                executionHour: scheduledPostObj.setTime.getHours(),
                executionMin: scheduledPostObj.setTime.getMinutes()
            }]
        })
    }
    let checkScheduledPosts = setInterval(() => {
        const currentTime = new Date()
        scheduledPosts.forEach((post, index) => {
            if (currentTime.getHours() === post.executionHour && currentTime.getMinutes() === post.executionMin) {
                handleAddComment(post.comment);
                scheduledPosts.splice(index, 1)
                
            }
        })
        if (scheduledPosts.length === 0) {
            clearInterval(checkScheduledPosts);
        }
    }, 1000);

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

        setCommentsList(prevComments => {return [...prevComments, commetObj]});
    }

    const handleDeleteComment = deleteCommentID => {
        setCommentsList(prevComments => {
            return prevComments.filter(comment => {
                return comment.id !== deleteCommentID;
            })
        })
        
    }
    
    const CommentEdit = edittedCommentObj => {
        setCommentsList(prevComments =>{
            return prevComments.filter(commentItem => {
                if (commentItem.id === edittedCommentObj.id) {
                    commentItem.comment = edittedCommentObj.editComment;
                }
                return commentItem;
            })
        })
    }





    return(
        <div>
            
            <div className="comment-container" style={{marginBottom: "20px"}}>
                <NewComment onAdd={handleAddComment} onScheduledPost={HandleAddScheduledPost}/>
            </div>

            <div className="prevComment-container">
            {reverseMap(commentsList, el => {
                return (<PreComments key={el.id} id={el.id} date={el.timeCreated} comment={el.comment} onDeleteComment = {handleDeleteComment} onEditComment={CommentEdit}/>)
            })}

                 
            </div>
        </div>
    )
}

export default Comments;