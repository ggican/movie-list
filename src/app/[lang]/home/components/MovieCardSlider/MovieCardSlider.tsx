/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { MovieCardSliderStyle } from './MovieCardSlider.style';

const MovieCardSlider: React.FC = () => {
  return (
    <MovieCardSliderStyle>
      <img
        src='https://cdn.oneesports.id/cdn-data/sites/2/2023/06/Marvel-RuangDM.jpg'
        alt='cover'
      />
      <div className='filter'></div>
      <div className='text'>
        <p>01 JULY 2024</p>
        <h1>Avengers: Infinity War II</h1>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          dolores unde, consequatur nihil incidunt odio corrupti saepe animi
          repellendus. Iste voluptatum quaerat nihil beatae sapiente rem minima
          dignissimos reprehenderit quasi?
        </span>
      </div>
    </MovieCardSliderStyle>
  );
};

export default MovieCardSlider;
