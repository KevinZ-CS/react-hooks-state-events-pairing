import React from "react";
import Comments from "./Comments";

function CommentsCard({ comments, hide }) {

    const displayComments = comments.map((comment) => {
        if(hide) {
            return <Comments key={comment.id} user={comment.user} comment={comment.comment} />
        } 
        else { return null}
    })

    return (
        <div>
            <h1>{hide ? comments.length + ' Comments' : null}</h1>
            {displayComments}
        </div>
    )
}

export default CommentsCard