import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as weatherActions from "./weather.actions";
import { weatherDataSelector } from "./wether.selectors";

const Weather = ({ weatherData, getWeatherData }) => {
  if (!weatherData) {
    getWeatherData();
    return null;
  }

  // useEffect(() => {
  //   getWeatherData();
  // }, []);

  return (
    <main className='weather'>
      <h1 className='weather__title'>Weather data</h1>
      <ul className='cities-list'>
        {weatherData.map((el) => (
          <li key={el.id} className='city'>
            <span className='city__name'>{el.name}</span>
            <span className='city__temperature'>{`${el.temperature} F`}</span>
          </li>
        ))}
      </ul>
    </main>
  );
};

const mapState = (state) => {
  return {
    weatherData: weatherDataSelector(state),
  };
};

const mapDispatch = {
  getWeatherData: weatherActions.getWeatherData,
};

export default connect(mapState, mapDispatch)(Weather);
