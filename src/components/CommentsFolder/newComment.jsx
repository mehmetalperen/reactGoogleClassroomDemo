import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './newComment.css'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import AttachFileIcon from '@material-ui/icons/AttachFile';
import LinkIcon from '@material-ui/icons/Link';
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Button from 'react-bootstrap/Button'
import RoundProfilePic from '../RoundProfilePic'
import 'date-fns'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker
} from '@material-ui/pickers'



function NewComment(props){

    const [isBoxClicked, setIsBoxClicked] = useState(false);
    const [typingVal, setTypingVal] = useState('');


    const handleTyping = event => {
        setTypingVal(event.target.value);
    }

    // Handle schudeling a post
    const [selectDate, setSelectDate] = useState(
        new Date()
    )
    const handleDateChange = date => {
        setSelectDate(date)
    }
    const [isSettingSchedule, setIsSettingSchedule] = useState(false);
    const CreateScheduledPost = time => {
        props.onScheduledPost({
            comment: typingVal,
            setTime: time
        });
        //Mon Nov 02 2020 21:00:36 GMT-0800 (Pacific Standard Time)
    }

    return(

        !isBoxClicked?
         <div className="preview-box" onClick={()=> {setIsBoxClicked(!isBoxClicked)}}><RoundProfilePic /><p>Share something with your class..</p></div>:
         <div  className="afterClicked">
            <div className="comment-box">
            
                <div className="class-select-btn">
                    <DropdownButton
                        variant="outline-secondary"
                        title={"Classes"}
                    >
                        <Dropdown.Item  eventKey="1">Computer Science</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Math</Dropdown.Item>
                        <Dropdown.Item eventKey="3" >
                        Counsiling
                        </Dropdown.Item>
                    </DropdownButton>
                </div> 
                
                <div className="viewer-select-btn">
                    <DropdownButton          
                            variant="outline-secondary"
                            title={"Students"}
                        >
                            <Dropdown.Item eventKey="1" > All Student</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Student 1</Dropdown.Item>
                            <Dropdown.Item eventKey="3">
                            Student 2
                            </Dropdown.Item>
                        </DropdownButton>
                    </div>

                    <div className = "comment-type-area">
                    <InputGroup size="lg">
                        <InputGroup.Prepend>
                        </InputGroup.Prepend>
                        <FormControl as="textarea" aria-label="With textarea" placeholder="Share with your class" rows={5} onChange={handleTyping} value={typingVal}/>
                    </InputGroup>
                    </div>

                    <div className="addFile-btn">
                    <DropdownButton
                                    
                            variant="outline-warning"
                            title={`${<AttachFileIcon/>}Add`}
                        >
                            <Dropdown.Item eventKey="1" ><ChangeHistoryIcon />Google Drive</Dropdown.Item>
                            <Dropdown.Item eventKey="2"><LinkIcon />Link</Dropdown.Item>
                            <Dropdown.Item eventKey="3"><AttachFileIcon fontSize="small" />File</Dropdown.Item>
                            <Dropdown.Item eventKey="2"><YouTubeIcon />YouTube</Dropdown.Item>

                        </DropdownButton>
                    </div>
                    <div className="cancel-btn">
                        <Button variant="outline-secondary" onClick={()=> {
                            setIsBoxClicked(false)
                            setTypingVal('')
                            }}>Cancel</Button>

                    </div>        
                    <div className="post-btn">
                    <DropdownButton
                            disabled={false}
                            variant="outline-secondary"
                            title={`Post`}
                        >
                            <Dropdown.Item eventKey="1" 
                            onClick={()=> {
                                props.onAdd(typingVal)
                                setTypingVal('');
                                setIsBoxClicked(false)
                                }}>Post</Dropdown.Item>
                            <Dropdown.Item eventKey="2" onClick={()=> {
                                setIsSettingSchedule(true)
                                }}>Schudel Post</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Save Draft</Dropdown.Item>
                        </DropdownButton>
                    </div>
        
            </div>

            {isSettingSchedule? 
            <div className="setSchedule-container">
                <div className="setSchedule-box">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">
                            <KeyboardTimePicker 
                                
                                margin="normal"
                                id="time-picker"
                                label="Time Picker"
                                value={selectDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label' : 'change date'
                                }}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider> 
                    <div className="schedule-btn-group">
                        <Button bgcolor="text" onClick={()=>{
                            setIsSettingSchedule(false)
                            }}>Cancel</Button>
                        <Button bgcolor="text" onClick={()=> {
                            CreateScheduledPost(selectDate)
                            setTypingVal('');
                            setIsBoxClicked(false)
                            setIsSettingSchedule(false)
                        }
                        }>Done</Button>
                    </div>
                    
                </div>
                
            </div>:
            null
            }


     </div>
    )
}

export default NewComment;