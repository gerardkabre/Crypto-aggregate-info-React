import React, { Component } from "react";
import Article from "./article";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentWillReceiveProps(newProps) {
    var searchTerm = newProps.selectedCoin,
      APIkey = "d5c0c2ca27914a2d9ecb78f5e519fbb6",
      language = "language=en",
      dateFrom = "2016-11-1",
      sort = "relevant",
      urlBase = "https://newsapi.org/v2/",
      articlesURL = `${urlBase}everything?q=${searchTerm}+crypto&${language}&sortBy=${sort}&apiKey=${APIkey}`;

    fetch(articlesURL)
      .then(response => response.json())
      .then(articles => this.setState({ articles: articles.articles }));
  }

  render() {
    return (
      <div className="news-container">
        <h1>
          <span className="blue">{this.props.selectedCoin}</span> Related
          Articles
        </h1>
        <div className="news-container-inside">
          {this.state.articles.map(x => <Article article={x} />)}
        </div>
      </div>
    );
  }
}

export default News;
