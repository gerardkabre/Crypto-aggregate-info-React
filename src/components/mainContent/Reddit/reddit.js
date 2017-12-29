import React from "react";
import RedditPost from "./redditpost";

class Reddit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redditPosts: [],
      sortValue: "top",
      timeValue: "all"
    };
    this.urlBase = `https://www.reddit.com/search.json?q=title%3A`;
  }
  componentWillReceiveProps(nextProps) {
    var urlSettings = `+crypto&restrict_sr=&sort=${this.state.sortValue}&t=${this.state.timeValue}`;
    var finalUrl = `${this.urlBase}${nextProps.selectedCoin}${urlSettings}`;
    this.fetchingData(finalUrl)
  }
  handleSortChange = (event) => {
    this.setState({sortValue: event.target.value});
    var urlSettings = `+crypto&restrict_sr=&sort=${event.target.value}&t=${this.state.timeValue}`;
    var finalUrl = `${this.urlBase}${this.props.selectedCoin}${urlSettings}`;
    this.fetchingData(finalUrl)
  }
  handleTimeChange = (event) => {
    this.setState({timeValue: event.target.value});
    var urlSettings = `+crypto&restrict_sr=&sort=${this.state.sortValue}&t=${event.target.value}`;
    var finalUrl = `${this.urlBase}${this.props.selectedCoin}${urlSettings}`;
    this.fetchingData(finalUrl)
  }
  fetchingData = url => {
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ redditPosts: data.data.children }));
  }
  render() {
    return (
      <div className="reddit-container">
        <h1>
          <span className="blue">{this.props.selectedCoin}</span> Reddit Posts
        </h1>
          <div className="reddit-container-inside">
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
            <table >
              <thead>
                <tr>
                  <th className="th">Title</th>
                  <th className="th">Subreddit</th>
                  <th className="th">Upvotes</th>
                  <th className="th">Comments</th>
                </tr>
              </thead>
              <tbody className="tbody">
              {this.state.redditPosts.map(x => (
                <RedditPost
                  subreddit={x.data.subreddit_name_prefixed}
                  description={x.data.selftext}
                  title={x.data.title}
                  url={x.data.url}
                  comments={x.data.num_comments}
                  upvotes={x.data.ups}
                />
              ))}
              </tbody>
            </table>
          </div>
        </div>
    );
  }
}

export default Reddit;
