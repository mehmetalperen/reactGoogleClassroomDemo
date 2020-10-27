import React from 'react'
import NewComment from './newComment'
import PreComments from './prevComments'




function Comments(){





    return(
        <div>
            
            <div className="comment-container">
                <NewComment />
            </div>

            <div className="prevComment-container">
                 <PreComments />
            </div>
        </div>
    )
}

export default Comments;