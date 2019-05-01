import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";

const MoviesPresenter = ({ loading }) =>
  loading ? <Loader /> : <Text>Movies</Text>;

MoviesPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  nomPlaying: PropTypes.array
};

export default MoviesPresenter;
