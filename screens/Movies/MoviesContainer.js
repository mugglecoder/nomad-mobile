import React from "react";
import MoviesPresenter from "./MoviesPresenter";
import { movies } from "../../api";

export default class extends React.Component {
  state = {
    loading: true,
    upcoming: null,
    popular: null,
    nowPlaying: null
  };

  async componentDidMount() {
    let upcoming, popular, nowPlaying, error;
    try {
      ({
        data: { result: upcoming }
      } = await movies.getUpcoming());
      ({
        data: { result: popular }
      } = await movies.getPopular());
      ({
        data: { result: nomPlaying }
      } = await movies.getNowPlaying());
    } catch {
      error: "cant get movies";
    } finally {
      this.setState({ loading: false, error, upcoming, popular, nowPlaying });
    }
  }

  render() {
    const { loading, upcoming, popular, nomPlaying } = this.state;
    return <MoviesPresenter loading={loading} />;
  }
}
