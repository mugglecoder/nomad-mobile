import React from "react";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component {
  state = {
    loading: false,
    movieRetults: null,
    tvResults: null,
    searchTerm: ""
  };

  handleSearchUpdate = text => {
    this.setState({
      searchTerm: text
    });
  };

  render() {
    const { loading, movieRetults, tvResults, searchTerm } = this.state;
    return (
      <SearchPresenter
        loading={loading}
        movieRetults={movieRetults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        handleSearchUpdate={this.handleSearchUpdate}
      />
    );
  }
}
