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
    try {
      const upcoming = await movies.getUpcoming();
      const popular = await movies.getPopular();
      const nomPlaying = await movies.getNowPlaying();
    } catch {
      this.setState({ error: "cant get movies" });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { loading } = this.state;
    return <MoviesPresenter loading={loading} />;
  }
}
