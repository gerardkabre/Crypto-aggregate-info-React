import React from 'react';

import DisplayListItem from './DisplayList-Item';
import DisplayList from './DisplayList';

import { fetchRedditPosts } from '../utils/api';

class RedditContainer extends React.Component {
  state = {
    redditPosts: [],
    sortValue: 'top',
    timeValue: 'all'
  };

  componentWillReceiveProps(nextProps) {
    fetchRedditPosts(this.state.sortValue, this.state.timeValue, nextProps.selectedCoin)
    .then(res => this.setState({ redditPosts: res.data.children })
    );

    
  }
  handleSortChange = event => {
    this.setState({ sortValue: event.target.value });
    // var finalUrl = `${this.urlBase}${this.props.selectedCoin}${urlSettings}`;
  };
  handleTimeChange = event => {
    this.setState({ timeValue: event.target.value });
    // var finalUrl = `${this.urlBase}${this.props.selectedCoin}${urlSettings}`;
  };

  render() {
    return (
      <div className="reddit-container">
        <DisplayList
          title={'Reddit new component'}
          column1={'Title'}
          column2={'Subreddit'}
          column3={'Upvotes'}
          column4={'Comments'}
          selectedCoin={this.props.selectedCoin}
        >
          {this.state.redditPosts.map(x => (
            <DisplayListItem
              title={x.data.title}
              firstValue={x.data.subreddit_name_prefixed}
              secondValue={'something'}
              thirdValue={x.data.num_comments}
            />
          ))}
        </DisplayList>
      </div>
    );
  }
}

export default RedditContainer;

/*
<div className="selectors">
            <select value={this.state.sortValue} onChange={this.handleSortChange}>
              <option value="top">popularity</option>
              <option value="relevancy">relevancy</option>
              <option value="new">new</option>
              <option value="comments">most comments</option>
            </select>
            <select value={this.state.timeValue} onChange={this.handleTimeChange}>
              <option value="all">all</option>
              <option value="hour">Last hour</option>
              <option value="week">Last week</option>
              <option value="month">Last month</option>
              <option value="year">Last year</option>
            </select>
</div>
*/
