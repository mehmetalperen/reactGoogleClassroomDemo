import React, {useState, useEffect} from 'react'
import RouncProfilePic from '../RoundProfilePic'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from "@material-ui/core/Button"
import InputGroup from 'react-bootstrap/InputGroup'
import SendIcon from '@material-ui/icons/Send';
import FormControl from 'react-bootstrap/FormControl'
import './prevComments.css'
import ReplyComment from './ReplyComment'
import { reverseMap } from '../util/helpers';





function PreComments(props){

let createdDate = {
    month: props.date.month,
    day: props.date.day
}

switch(createdDate.month) {
    case 0:
    createdDate.month = 'Jan';
    break;

    case 1:
        createdDate.month = "Feb";
        break;
    case 2:
        createdDate.month = "Mar";
        break;
    case 3: 
    createdDate.month = "Apr";
        break;
    case 4:
        createdDate.month = "May";
        break;
    
    case 5:
        createdDate.month = 'Jun'
        break;
    case 6:
        createdDate.month = "Jul"
        break;
    case 7:
        createdDate.month = "Aug"
        break;
    case 8:
        createdDate.month ='Sep'
        break;
    case 9:
        createdDate.month = 'Oct';
        break;
    case 10:
        createdDate.month ='Nov';
        break;
    case 11:
        createdDate.month='Dec';
        break;
}

const [typingReply, setTypingReply] = useState('');
const handleTypingReply = event => {
    setTypingReply(event.target.value);
}

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

const [showMoreComments, setShowMoreComments] = useState(false);
const [messeageToggle, setMesseageToggle] = useState('Show')



useEffect(() => {

    !showMoreComments? setMesseageToggle('Show'): setMesseageToggle("Hide")
}, [showMoreComments]);


 

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
                            <li><a href="#">Edit</a></li>
                            <li onClick={()=>{
                                props.onDeleteComment(props.id)
                                }}><a>Delete</a></li>
                            <li><a href="#">Copy Link</a></li>
                        </ul>
                    </div>
                </div>           
            </div>

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
                            }}>{replyComments.length} <span style={{fontWeight: "lighter"}}> Comment {messeageToggle}</span></h6>
                </div>:
                 null
                 }


                {
                    showMoreComments?//I want it to render newest to oldes but it does the opposite. I think I could achieve my goal by using for loop. but I feel like there is a better way of doing it.
                    reverseMap(replyComments, el => {
                    return (<ReplyComment key={el.id} id={el.id} date={el.timeCreated} reply={el.reply}/>)
                }):
                 null
                }
                
                      
            </div>


        </div>
    )
}

export default PreComments;