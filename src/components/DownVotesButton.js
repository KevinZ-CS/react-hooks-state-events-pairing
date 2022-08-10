import React from "react";

function DownVoteButton({ dislikes, setDownVotes }) {

    function handleClick() {
        setDownVotes(dislikes - 1)
    }

    return (
        <button onClick={handleClick}>👎 {dislikes}</button>
    )
}

export default DownVoteButton