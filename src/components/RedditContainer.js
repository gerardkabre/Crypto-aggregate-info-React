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
    fetchRedditPosts(this.state.sortValue, this.state.timeValue, nextProps.selectedCoin).then(res =>
      this.setState({ redditPosts: res.data.children })
    );
  }

  handleChange = (event, element) => {
    if (element === 'sort') this.setState({ sortValue: event.target.value });
    if (element === 'time') this.setState({ timeValue: event.target.value });
    fetchRedditPosts(this.state.sortValue, this.state.timeValue, this.props.selectedCoin).then(res =>
      this.setState({ redditPosts: res.data.children })
    );
  };

  render() {
    return (
      <div className="reddit-container">
        <DisplayList
          title={'Reddit posts'}
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

        <div className="selectors">
          <select value={this.state.sortValue} onChange={event => this.handleChange(event, 'sort')}>
            <option value="top">popularity</option>
            <option value="relevancy">relevancy</option>
            <option value="new">new</option>
            <option value="comments">most comments</option>
          </select>
          <select value={this.state.timeValue} onChange={event => this.handleChange(event, 'time')}>
            <option value="all">all</option>
            <option value="hour">Last hour</option>
            <option value="week">Last week</option>
            <option value="month">Last month</option>
            <option value="year">Last year</option>
          </select>
        </div>
      </div>
    );
  }
}

export default RedditContainer;
