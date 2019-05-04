import React from "react";
import TVPresenter from "./TVPresenter";
import { tv } from "../../api";

export default class extends React.Component {
  state = {
    loading: true,
    popular: null,
    getAiringThisWeek: null,
    airingToday: null
  };

  async componentDidMount() {
    let popular, getAiringThisWeek, airingToday, error;
    try {
      ({
        data: { results: popular }
      } = await tv.getPopular());
      ({
        data: { results: getAiringThisWeek }
      } = await tv.getAiringThisWeek());
      ({
        data: { results: airingToday }
      } = await tv.getAiringToday());
    } catch (error) {
      console.log(error);
      error = "Can't get TV";
    } finally {
      this.setState({
        loading: false,
        error,
        popular,
        getAiringThisWeek,
        airingToday
      });
    }
  }
  render() {
    const { loading, popular, getAiringThisWeek, airingToday } = this.state;
    return (
      <TVPresenter
        loading={loading}
        popular={popular}
        getAiringThisWeek={getAiringThisWeek}
        airingToday={airingToday}
      />
    );
  }
}
