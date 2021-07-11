import React from "react";
import PropTypes from "prop-types";
import { formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale";

const Time = ({ date }) =>
  formatDistanceToNow(date, { addSuffix: true, locale: ru });

Time.propTypes = {
  date: PropTypes.date,
};

export default Time;
