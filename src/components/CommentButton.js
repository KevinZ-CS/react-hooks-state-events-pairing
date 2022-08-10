import React from "react";


function CommentButton({ hide, setHide }) {

    function handleClick() {
        setHide(!hide)
    }

    return (
       <React.Fragment>
        <button onClick={handleClick}>{hide ? 'Hide Comments': 'Show Comments'}</button>
        {/* {displayComments} */}
       </React.Fragment>
    )
}

export default CommentButton