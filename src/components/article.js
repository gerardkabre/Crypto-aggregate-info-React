import React from "react";

let Article = props => {
  const title = props.article.title;
  const titleTooLong = props.article.title.length > 60;
  var description = props.article.description;
console.log(props.article)
  return (
    <div className="post">
      <h3>{ title } </h3>
      <div className="post-descriptions">
      <h4>{props.article.source.name} </h4>
      <p>{ }</p>
      </div>
    </div>
  );
};
export default Article;
