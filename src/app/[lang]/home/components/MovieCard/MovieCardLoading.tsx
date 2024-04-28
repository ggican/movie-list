/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Skeleton } from 'antd';
import { CardStyle } from './MovieCard.style';

const MovieCardLoading: React.FC = () => {
  return (
    <CardStyle>
      <div className='movie-card--image'>
        <div className='movie-card--love'>
          <Skeleton.Button active={true} size='large' shape='circle' />
        </div>
      </div>
      <div className='movie-card--body'>
        <Skeleton active={true} />
      </div>
    </CardStyle>
  );
};

export default MovieCardLoading;
