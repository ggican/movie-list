/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import { Button, Flex, Rate } from 'antd';
import { MovieList } from '@/services/movie';
import { CardStyle } from './MovieCard.style';
import { useHomeContext } from '../../context';
import MovieCardLoading from './MovieCardLoading';

const MovieCard: React.FC<MovieList> = ({
  id,
  imageUrl,
  rating,
  title,
  year,
  love,
  onLove
}) => {
  const handleClickLove = (e: any) => {
    e.preventDefault();
    onLove({
      id: id,
      value: !love
    });
  };
  return (
    <CardStyle>
      <div className='movie-card--image'>
        <div className='movie-card--love'>
          <Button
            onClick={handleClickLove}
            shape='circle'
            size='large'
            icon={
              love ? (
                <HeartFilled style={{ fontSize: 24 }} />
              ) : (
                <HeartOutlined style={{ fontSize: 24 }} />
              )
            }
            type='link'
            danger
          ></Button>
        </div>
        <div className='movie-card--filter'></div>
        <img alt={title} src={imageUrl} />
      </div>
      <div className='movie-card--body'>
        <Flex gap='middle' vertical>
          <Rate value={rating} disabled />
        </Flex>
        <h4>{title}</h4>
        <span>{year}</span>
      </div>
    </CardStyle>
  );
};

export default MovieCard;
