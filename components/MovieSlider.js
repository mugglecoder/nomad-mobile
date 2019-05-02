import React from "react";
import PropTpyes from "prop-types";
import styled from "styled-components";
import Swiper from "react-native-swiper";
import Layout from "../constants/Layout";

const SWIPER_HEIGHT = Layout.height / 3;

const View = styled.View`
  background-color: red;
  height: ${SWIPER_HEIGHT};
`;

const Text = styled.Text``;

const MovieSlider = ({ movies }) => (
  <Swiper
    showsPagination={false}
    autoplay={true}
    style={{ height: SWIPER_HEIGHT }}
  >
    <View>
      <Text>11111</Text>
    </View>
    <View>
      <Text>22222</Text>
    </View>
    <View>
      <Text>33333</Text>
    </View>
  </Swiper>
);

MovieSlider.porpTypes = {
  movies: PropTpyes.array
};

export default MovieSlider;
