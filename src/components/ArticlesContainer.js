import React, { Component } from 'react';

import DisplayListItem from './DisplayList-Item';
import DisplayList from './DisplayList';

class ArticlesContainer extends Component {
  state = {
    articles: []
  };

  componentWillReceiveProps(newProps) {
    var searchTerm = newProps.selectedCoin,
      APIkey = 'd5c0c2ca27914a2d9ecb78f5e519fbb6',
      language = 'language=en',
      dateFrom = '2016-11-1',
      sort = 'relevant',
      urlBase = 'https://newsapi.org/v2/',
      articlesURL = `${urlBase}everything?q=${searchTerm}+crypto&${language}&sortBy=${sort}&apiKey=${APIkey}`;

    fetch(articlesURL)
      .then(response => response.json())
      .then(articles => this.setState({ articles: articles.articles }));
  }

  render() {
    return (
      <div className="reddit-container">
        <DisplayList
          title={'articles biiiitch'}
          column1={'Title'}
          column2={'Source'}
          column3={'Author'}
          column4={'Date'}
          selectedCoin={this.props.selectedCoin}
        >
          {this.state.articles.map(x => (
            <DisplayListItem
              title={x.title}
              firstValue={x.source.name}
              secondValue={x.author}
              thirdValue={x.publishedAt}
            />
          ))}
        </DisplayList>
      </div>
    );
  }
}

export default ArticlesContainer;
