import React, {useState} from 'react';
import './ClassPreviewCard.css'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Link} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


function ClassPreviewCard(props){



    const [editClass, setEditClass] = useState(false);
    const [className, setClassName] = useState('');
    const [classInfo, setClassInfo] = useState('');

    const HandleClassNameTyping = event => {
        setClassName(event.target.value)
    }
    const HandleClassInfoTyping = event => {
        setClassInfo(event.target.value)
    }
    return(
        <div className="classPreview-container">
           
            <div className="classPreview-card">
            <Link to={`/classHome/${props.id}`}><h3>{props.name}</h3></Link>
            <Link to={`/classHome/${props.id}`}><h5>{props.meeting}</h5></Link>
            </div>
            
            <div className="editBtn-contanier">
                <div className="dropdown-btn">
                    <button ><MoreVertIcon /></button>
                    <ul>
                        <li onClick={()=>{setEditClass(true)}}><a>Edit</a></li>
                        <li onClick={()=>{props.onDelete(props.id)}}><a>Delete</a></li>  
                    </ul>
                </div>
            </div> 

            {editClass? 
            <div className="create-class-container">
                <div className="create-class-box">
                    <div>
                        <TextField id="filled-basic" label="Filled" variant="filled" placeholder="Class name" value={className} onChange={HandleClassNameTyping}/>
                    </div>
                    <div>
                        <TextField id="filled-basic" label="Filled" variant="filled" placeholder="Meeting Info"value={classInfo} onChange={HandleClassInfoTyping}/>
                    </div>

                    <div className="action-buttons-box">
                        <Button onClick={()=>{setEditClass(false)}}>Cancel</Button>
                        <Button onClick={()=>{
                            props.onEdit(props.id, className, classInfo);
                            setClassName('');
                            setClassInfo('');
                            setEditClass(false);
                        }} >Submit</Button>

                    </div>
                </div>
            </div>: null          
            }
        </div>


    )
}

export default ClassPreviewCard;