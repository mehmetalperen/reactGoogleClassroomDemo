import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ClassTitle.css';


function ClassTitle() {

    

    return(
        <div className='class-title-contanier'>
            <div className="class-info-box">
                <h1>Counseling</h1>
                <h4>Monday-Friday 10:00 AM</h4>
                <h6>Class Code</h6>
                <p>ldfkjasljf3</p>
            </div>

            <div className="theme-settings-box">
                <ul>
                 <li><a href="/">Select theme</a></li>
                 <li><a href="/">Upload photo</a></li>
                </ul>
            </div>
        </div>
    )
}

export default ClassTitle;