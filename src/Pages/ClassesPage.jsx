import React, {useEffect, useState} from 'react'
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import './ClassesPage.css'
import ClassPreviewCard from '../components/ClassPreviewCard';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { reverseMap } from '../components/util/helpers';

function ClassesPage(){

    ////////////////////////Creating New Class
    const [classList, setClassList] = useState([]);

    //when "add class" button clicked -> display "add class container"
    const [addingClass, setAddingClass] = useState(false)

    //Class name
    const [className, setClassName] = useState('');

    //Meeting Info
    const [meetingInfo, setMeetingInfo] = useState('');

    //handle className typing
    const HandleTypingClassName = event => {
        setClassName(event.target.value);
    } 
    //handle meeting info typing
    const HandleMeetingInfoTyping = event => {
        setMeetingInfo(event.target.value);
    }
    const HandleCreatingClass = () => {
        let ID;
        if (classList.length > 0) {
            ID = classList[classList.length-1].id + 1;
        } else {
            ID = 0;
        }
        let ClassObj = {
            id: ID,
            name: className,
            meetingTime: meetingInfo
        }
        setClassList(previousClassess => {
            return [...previousClassess, ClassObj]
        });
        setClassName('');
        setMeetingInfo('')
    }
    ////////////////////////Edit Class
    const HandleEdit = (id, name, meeting) => {
        setClassList(prevClasses => {
            return prevClasses.filter(item => {
                if (item.id === id) {
                    item.name = name;
                    item.meetingTime = meeting;
                }
                return item
            })
        })
    }
    ////////////////////Handle Delete Class
    const HandleDeleteClass = (id) => {
        let indexOfDeletedItem;
        classList.forEach((item, index)=>{
            if (item.id === id) {
                indexOfDeletedItem = index;
            }
        });
        classList.splice(indexOfDeletedItem, 1);
        setClassList(prevClasses => {
            return [...prevClasses]
        })
    }



    
    return(
        <div className="ClassesPage-wrapper">
            <div className="ClassesPage-container">
                <div className="create-class-btn-container">
                    <IconButton aria-label="delete" color="primary" onClick={()=>{setAddingClass(true)}}>
                        <AddIcon color="primary"/>
                    </IconButton>
                </div>

                {reverseMap(classList, classInfo => {
                    return <ClassPreviewCard key={classInfo.id} id={classInfo.id} name={classInfo.name} meeting={classInfo.meetingTime} onEdit={HandleEdit} onDelete={HandleDeleteClass}/>
                })}

            </div>  

            {addingClass? 
            <div className="create-class-container">
                <div className="create-class-box">
                    <div>
                        <TextField id="filled-basic" label="Filled" variant="filled" placeholder="Class name" value={className} onChange={HandleTypingClassName}/>
                    </div>
                    <div>
                        <TextField id="filled-basic" label="Filled" variant="filled" placeholder="Meeting Info" value={meetingInfo} onChange={HandleMeetingInfoTyping}/>
                    </div>

                    <div className="action-buttons-box">
                        <Button onClick={()=>{
                            setAddingClass(false)
                            setClassName('');
                            setMeetingInfo('')
                            }}>Cancel</Button>
                        <Button onClick={()=>{
                            HandleCreatingClass();
                            setAddingClass(false)
                        }}>Create</Button>

                    </div>
                </div>
            </div>: null          
            }




        </div>
    )
}

export default ClassesPage;