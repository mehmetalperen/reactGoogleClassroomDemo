import React, {useState, useEffect} from 'react'
import RouncProfilePic from '../RoundProfilePic'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from "@material-ui/core/Button"
import InputGroup from 'react-bootstrap/InputGroup'
import SendIcon from '@material-ui/icons/Send';
import FormControl from 'react-bootstrap/FormControl'
import './prevComments.css'
import ReplyComment from './ReplyComment'
import { reverseMap, getMonthString } from '../util/helpers';
import EditComments from './EditComments'



function PreComments(props){

const createdDate = {
    month: getMonthString(props.date.month),
    day: props.date.day
}

//typing reply to a comment
const [typingReply, setTypingReply] = useState('');
const handleTypingReply = event => {
    setTypingReply(event.target.value);
}

//adding reply to a comment
const [replyComments, setReplyComments] = useState([]);
const handleAddReply = () => {
    let ID;
    if(replyComments.length >0) {
        ID = replyComments[replyComments.length-1].id + 1
    } else {
        ID = 0;
    }
    let replyObj = {
        id: ID,  
        reply: typingReply,
        timeCreated: {
            month: new Date().getMonth(),
            day: new Date().getDate()
        }
    }

    setReplyComments(prevReplies => {
        return [...prevReplies, replyObj]
    });
    setTypingReply('')
}

//handle showing and hiding replies
const [showMoreComments, setShowMoreComments] = useState(false);
const [messeageToggle, setMesseageToggle] = useState('Show')

useEffect(() => {
    !showMoreComments? setMesseageToggle('Show'): setMesseageToggle("Hide")
}, [showMoreComments]);


//handle delete replies
const handleDeleteReplies = deleteReplyID => {
    setReplyComments(prevReplies=> {
        return prevReplies.filter(reply => {
            return reply.id !== deleteReplyID
        })
    })
}
//Handle edit reply 
const HandleEdittedReply = editedReplyObj => {
    setReplyComments(prevReplies => {
        return prevReplies.filter(replyItem => {
            if (replyItem.id === editedReplyObj.id) {
                replyItem.reply = editedReplyObj.reply;
            }
            return replyItem;
        })
    })
}

//handle Edit comment
const [editComment, setEditComment] = useState(false);
const CanseEditComment = () =>{
    setEditComment(false)
}
const HandleEditedCommentSubmit = editedComment => {
    props.onEditComment({id: props.id, editComment: editedComment});
    setEditComment(false)

}

    return(
        <div className="prevComment-box" style={{marginBottom: "20px"}}>
        
            <div className="comment-header">
                <div style={{margin: "10px 10px 0 10px"}} className="commenter-info-box">
                    <RouncProfilePic style={{margin: "10px"}}/>
                    <div style={{margin: "0 0 0 20px"}}>
                        <h6 style={{display: "block"}}>UserName</h6>
                        <p style={{display: "block"}}className="date-p">{createdDate.month} {createdDate.day}</p>                        
                    </div>

                </div>
                <div className="editBtn-contanier">
                    <div className="dropdown-btn">
                        <button ><MoreVertIcon /></button>
                        <ul>
                            <li onClick={()=>{setEditComment(true)}}><a>Edit</a></li>
                            <li onClick={()=>{
                                props.onDeleteComment(props.id)
                                }}><a>Delete</a></li>
                            <li><a href="#">Copy Link</a></li>
                        </ul>
                    </div>
                </div>           
            </div>
            {editComment? <EditComments type={'Annoncement'} onCancelEdit={CanseEditComment} textToEdit={props.comment} saveEdit = {HandleEditedCommentSubmit}/>: null}
            

            <div className="main-content-container">
                <p className="comment-p">{props.comment}</p>
            </div>

            <div style={{margin: '10px'}}className="reply-comment-container">
            <div style={{display: "flex"}}>
                <RouncProfilePic/> 
                <InputGroup className="input-form" className="mb-3">
                    <FormControl
                    onChange={handleTypingReply}
                    placeholder="Add comment.."
                    aria-label="Add comment"
                    aria-describedby="basic-addon2"
                    value={typingReply}
                    />
                    <InputGroup.Append>
                        <IconButton aria-label="add" onClick={(handleAddReply)}>
                            <SendIcon color="primary" />
                        </IconButton>                     
                    </InputGroup.Append>
                </InputGroup>                
            </div>

                {
                replyComments.length > 0? 
                <div style={{display: "block", padding: "10px"}}>
                    <hr />
                    <h6 className="show-hide-h6"
                        onClick={()=> {
                            setShowMoreComments(!showMoreComments)
                            }}>{replyComments.length} <span style={{fontWeight: "lighter"}}> Comment{replyComments.length>1? 's': null} {messeageToggle}</span></h6>
                </div>:
                 null
                 }


                {
                    showMoreComments?
                    reverseMap(replyComments, el => {
                    return (<ReplyComment key={el.id} id={el.id} date={el.timeCreated} reply={el.reply} onDelete={handleDeleteReplies} onEditReply={HandleEdittedReply}/>)
                }):
                 null
                }
                
                      
            </div>


        </div>
    )
}

export default PreComments;