import React from "react";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import { INACTIVE_COLOR, ACTIVE_COLOR } from "../constants/Colors";

const TabBarIcon = ({ name, focused }) => (
  <Ionicons
    size={26}
    name={name}
    color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
  />
);

TabBarIcon.prototypes = {
  name: PropTypes.string.isRequired,
  focused: PropTypes.bool.isRequired
};

export default TabBarIcon;
