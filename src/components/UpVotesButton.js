import React from "react";

function UpVoteButton({ likes, setUpVotes }) {

    function handleClick() {
        setUpVotes(likes + 1)
    }

    return (
        <button onClick={handleClick}>👍 {likes}</button>
    )
}

export default UpVoteButton