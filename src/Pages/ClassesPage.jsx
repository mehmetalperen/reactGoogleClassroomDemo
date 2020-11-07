import React, {useState} from 'react'
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import './ClassesPage.css'
import ClassPreviewCard from '../components/ClassPreviewCard';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


function ClassesPage(){

    const [classList, setClassList] = useState([]);

    const [addingClass, setAddingClass] = useState(true)



    
    return(
        <div className="ClassesPage-wrapper">
            <div className="ClassesPage-container">
                <div className="create-class-btn-container">
                    <IconButton aria-label="delete" color="primary" onClick={()=>{setAddingClass(true)}}>
                        <AddIcon color="primary"/>
                    </IconButton>
                </div>
                <ClassPreviewCard />
                <ClassPreviewCard />
                <ClassPreviewCard />
                <ClassPreviewCard />
                <ClassPreviewCard />
                <ClassPreviewCard />
            </div>  

            {addingClass? 
            <div className="create-class-container">
                <div className="create-class-box">
                    <div>
                        <TextField id="filled-basic" label="Filled" variant="filled" placeholder="Class name" onChange={()=> {alert('typing')}}/>
                    </div>
                    <div>
                        <TextField id="filled-basic" label="Filled" variant="filled" placeholder="Meeting Info"/>
                    </div>

                    <div className="action-buttons-box">
                        <Button onClick={()=>{setAddingClass(false)}}>Cancel</Button>
                        <Button>Create</Button>

                    </div>
                </div>
            </div>: null          
            }




        </div>
    )
}

export default ClassesPage;