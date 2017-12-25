import React from "react";

let Article = props => {
  console.log(props.article)
  
  return (
    <tr>
      <td class="blue">{props.article.title}</td>
      <td>{props.article.source.name}</td>
      <td>{props.article.author}</td>
      <td>{props.article.publishedAt}</td>
      
      
      
    </tr>
  );
};
export default Article;
