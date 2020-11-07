import React, {useState} from 'react';
import './ClassHomePage.css';
import Navbar from '../components/Navbar';
import ClassTitle from '../components/ClassTitle';
import UpcomingEvent from '../components/UpcomingEvent';
import Comments from '../components/CommentsFolder/Comments';



function ClassHomePage() {

  

  return (
      <div className="ClassHomePage">


        <div className="class-title-wrapper">
        <ClassTitle />
    
        </div>
        <div className="emptyness-wrapper">

        </div>

        <div className="upcoming-event-wrapper">
          <UpcomingEvent />
        </div>

        <div className="comment-wrapper">
          <Comments /> 
        </div>

        
      </div>
    
  );
}

export default ClassHomePage;
