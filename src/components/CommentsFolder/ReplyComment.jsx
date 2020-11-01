import React from 'react';
import RouncProfilePic from '../RoundProfilePic';



function ReplyComment(props) {

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
        <div style={{display: "block"}}>
            <div style={{margin: "10px 10px 0 10px", display: 'flex'}}>
                <RouncProfilePic style={{margin: "10px"}}/>
                <div style={{margin: "0 0 0 20px"}}>
                    <h6 style={{display: "block"}}>UserName <span style={{fontWeight: 'lighter'}}> {`${createdDate.month}${createdDate.day}`}</span></h6>
                    <p style={{display: "block"}}className="date-p">{props.reply}</p>                        
                </div>

                </div>

        </div>
    )
}


export default ReplyComment;