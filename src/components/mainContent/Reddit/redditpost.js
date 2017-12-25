import React from "react";

let RedditPost = props => {
  return (
    <tr>
      <td class="blue">{props.title}</td>
      <td>{props.subreddit}</td>
      <td>{props.upvotes}</td>
      <td>{props.comments}</td>
    </tr>
  );
};

export default RedditPost;
