import React from "react";

export class SearchBar extends React.Component {
  state = {
    searchTerm: ""
  };

  inputchange = (event) => {
      this.setState({searchTerm: event.target.value})
  }
  render() {
    return (
      <input
        value={this.state.searchTerm}
        placeholder="Search for a crypto"
        onChange={this.inputChange(event)}
      />
    );
  }
}
