import React from 'react'
import RouncProfilePic from '../RoundProfilePic'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from "@material-ui/core/Button"
import InputGroup from 'react-bootstrap/InputGroup'
import SendIcon from '@material-ui/icons/Send';
import FormControl from 'react-bootstrap/FormControl'
import './prevComments.css'

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


    return(
        <div className="prevComment-box" style={{marginBottom: "20px"}}>

                <div style={{margin: "10px 10px 0 10px"}} className="commenter-info-box">
                    <RouncProfilePic style={{margin: "10px"}}/>
                    <div style={{margin: "0 0 0 20px"}}>
                        <h6 style={{display: "block"}}>UserName</h6>
                        <p style={{display: "block"}}className="date-p">{createdDate.month} {createdDate.day}</p>                        
                    </div>

                </div>
                <IconButton className="editBtn" aria-label="edit">
                    <MoreVertIcon />
                </IconButton>                



            <p style={{margin: '10px 10px 10px 30px'}} className="comment-p">{props.comment}</p>

            <div style={{margin: '10px'}}className="reply-comment-container">
            <RouncProfilePic/> 
            <InputGroup className="input-form" className="mb-3">
                <FormControl
                placeholder="Add comment.."
                aria-label="Add comment"
                aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <IconButton aria-label="delete">
                        <SendIcon color="primary" />
                    </IconButton>                     
                </InputGroup.Append>
            </InputGroup>
            </div>
        </div>
    )
}

export default PreComments;