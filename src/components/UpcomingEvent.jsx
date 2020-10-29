import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import './UpcomingEvent.css'


function UpcomingEvent(){



    
    return(
        <div className='upcoming-event-contanier'>
            <h6 className="title">Upcoming</h6>
            <p className="parag">No work due soon</p>
            <div style={{textAlign: "right"}}>
                <Button className="btn" href="#text-buttons" color="primary" >View all</Button>
            </div>
        </div>
    )
}

export default UpcomingEvent