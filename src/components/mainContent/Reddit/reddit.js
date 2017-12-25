import React from "react";
import RedditPost from "./redditpost";

class Reddit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redditPosts: []
    };
  }
  componentWillReceiveProps(newProps) {
    var urlBase = `https://www.reddit.com/search.json?q=title%3A`;
    var urlSettings = `+crypto&restrict_sr=&sort=top&t=all`;
    var finalUrl = `${urlBase}${newProps.selectedCoin}${urlSettings}`;
    fetch(finalUrl)
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
