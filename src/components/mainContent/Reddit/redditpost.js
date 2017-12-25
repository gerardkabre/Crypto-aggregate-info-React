import React from "react";

let RedditPost = props => {
    return (
        <div className="post">
          <a href={props.url}>
          <h3>{props.title}</h3>
          </a>
          <div className="post-descriptions ">
             <h4>{props.subreddit}</h4> <p> upvotes : {props.upvotes} | comments: {props.comments}</p>

          </div>
        </div>
      )
    }

export default RedditPost;
