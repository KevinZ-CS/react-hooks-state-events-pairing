import { useState } from "react";
import video from "../data/video.js";
import CommentButton from "./CommentButton.js";
import DownVoteButton from "./DownVotesButton.js";
import UpVoteButton from "./UpVotesButton.js";
import VideoInfo from "./VideoInfo.js";
import CommentsCard from "./CommentsCard.js";

function App() {
  // console.log("Here's your data:", video);
  const [upVotes, setUpVotes] = useState(video.upvotes)
  const [downVotes, setDownVotes] = useState(video.downvotes)
  const [hide, setHide] = useState(false)

  const comments = video.comments

  return (
    <div className="App">
      <VideoInfo video={video.embedUrl} title={video.title} views={video.views} date={video.createdAt} />
      <UpVoteButton likes={upVotes} setUpVotes={setUpVotes} />
      <DownVoteButton dislikes={downVotes} setDownVotes={setDownVotes} />
      <br/>
      <br />
      <CommentButton comments={comments} hide={hide} setHide={setHide} />
      <CommentsCard comments={comments} hide={hide} />
    </div>
  );
}

export default App;
