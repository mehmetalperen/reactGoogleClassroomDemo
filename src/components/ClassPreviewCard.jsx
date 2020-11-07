import React, {useState} from 'react';
import './ClassPreviewCard.css'
import MoreVertIcon from '@material-ui/icons/MoreVert';



function ClassPreviewCard(){



    
    return(
        <div className="classPreview-container">
           
            <div className="classPreview-card">
                <h3>Class name</h3>
                <h5>Meeting days</h5>
            </div>
            
            <div className="editBtn-contanier">
                <div className="dropdown-btn">
                    <button ><MoreVertIcon /></button>
                    <ul>
                        <li><a>Edit</a></li>
                        <li><a>Delete</a></li>  
                    </ul>
                </div>
            </div> 

        </div>
    )
}

export default ClassPreviewCard;