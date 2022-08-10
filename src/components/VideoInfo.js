import React from "react";

function VideoInfo({ video, title, views, date }) {
    return (
    <div>
        <iframe
        width="919"
        height="525"
        src={video}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{title}</h1>
      <br />
      <p>{views} views | Uploaded {date}</p>
    </div>
    )
}

export default VideoInfo