import React, { Component } from 'react';

import DisplayListItem from './DisplayList-Item';
import DisplayList from './DisplayList';

import { fetchArticles } from '../utils/api';

class ArticlesContainer extends Component {
  state = {
    articles: []
  };

  componentWillReceiveProps(newProps) {
    fetchArticles(newProps.selectedCoin).then(res => this.setState({ articles: res.articles }));
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
