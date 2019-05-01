import React from "react";
import TVPresenter from "./TVPresenter";
import { tv } from "../../api";

export default class extends React.Component {
  state = {
    loading: true,
    popular: null,
    topRated: null,
    airingToday: null
  };

  async componentDidMount() {
    let popular, topRated, airingToday, error;
    try {
      ({
        data: { result: popular }
      } = await tv.getPopular());
      ({
        data: { result: topRated }
      } = await tv.getTopRated());
      ({
        data: { result: airingToday }
      } = await tv.getAiringToday());
    } catch {
      error = "cant get TV";
    } finally {
      this.setState({ loading: false, popular, topRated, airingToday, error });
    }
  }
  render() {
    const { loading, popular, topRated, airingToday } = this.state;
    return (
      <TVPresenter
        loading={loading}
        popular={popular}
        topRated={topRated}
        airingToday={airingToday}
      />
    );
  }
}
