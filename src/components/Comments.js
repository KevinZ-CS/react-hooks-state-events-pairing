import React from "react";

function Comments({ user, comment }) {
    return (
        <React.Fragment>
            <h1>{user}</h1>
            <p>{comment}</p>
        </React.Fragment>
    )
}

export default Comments