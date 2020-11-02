import React, {useState} from 'react';
import './EditComments.css'
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from '@material-ui/core/Button';

function EditComments(props){



const [TypingEdit, setTypingEdit] = useState(props.textToEdit)

const HandleEditTyping = event => {
    setTypingEdit(event.target.value);
}
    return(
        <div className='edit-comment-wrapper'>
            <div className="edit-comment-container">
                <div className="announcement-header">
                    <h4 style={{color: "coral"}}><ChatBubbleOutlineIcon color="primary"/> Announcement</h4>
                    <IconButton aria-label="close" color="seconadry" onClick={()=> {props.onCancelEdit()}}>
                        <CancelIcon />
                    </IconButton>
                </div>
                <hr />
                <div className="edit-comment-form">
                    <InputGroup size="lg">
                        <InputGroup.Prepend>
                        </InputGroup.Prepend>
                        <FormControl as="textarea" aria-label="With textarea" onChange={HandleEditTyping} value={TypingEdit} rows={5} />
                    </InputGroup>
                </div>
                <hr />
                <div className="announcement-footer">
                <Button color="text" onClick={()=> {props.onCancelEdit()}}>Cancel</Button>
                <Button color="primary" onClick={()=> {props.saveEdit(TypingEdit)}}>Save</Button>

                </div>
            </div>
        </div>
    )
}

export default EditComments;