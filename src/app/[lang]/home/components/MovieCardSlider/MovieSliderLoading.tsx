/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { MovieCardSliderStyle } from './MovieCardSlider.style';
import { Skeleton } from 'antd';

const MovieSliderLoading: React.FC = () => {
  return (
    <MovieCardSliderStyle>
      <div className='text'>
        <Skeleton active={true} />
      </div>
    </MovieCardSliderStyle>
  );
};

export default MovieSliderLoading;
