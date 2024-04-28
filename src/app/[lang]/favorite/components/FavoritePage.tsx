/* eslint-disable @next/next/no-img-element */
'use client';
import { Col, Row } from 'antd';
import { MovieList } from '@/services/movie';
import MovieCard from '../../home/components/MovieCard/MovieCard';
import { FavoriteProvider, useFavoriteContext } from '../context';
import MovieCardLoading from '../../home/components/MovieCard/MovieCardLoading';
import Link from 'next/link';
import useLang from '@/hooks/dictionaries';

type HomeProps = {
  params: {
    lang: string;
  };
};
function FavoriteElement({ params }: HomeProps) {
  const t = useLang(params?.lang);
  const { displayData, onLove, isLoading } = useFavoriteContext();
  return (
    <>
      {isLoading ? (
        <Row gutter={[24, 30]}>
          <Col xs={24} sm={12} md={12} lg={12} xl={8}>
            <MovieCardLoading></MovieCardLoading>
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={8}>
            <MovieCardLoading></MovieCardLoading>
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={8}>
            <MovieCardLoading></MovieCardLoading>
          </Col>
        </Row>
      ) : (
        <Row gutter={[24, 30]}>
          {displayData?.length > 0 ? (
            displayData
              ?.filter(item => item?.love)
              .map((item: MovieList, key: number) => {
                return (
                  <Col key={key} xs={24} sm={12} md={12} lg={12} xl={8}>
                    <Link prefetch href={`/${params?.lang}/movie/${item?.id}`}>
                      <MovieCard
                        {...item}
                        desc={t('movieDesc')}
                        onLove={onLove}
                      ></MovieCard>
                    </Link>
                  </Col>
                );
              })
          ) : (
            <img
              src='https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?w=2000&t=st=1714324711~exp=1714325311~hmac=7149ee0b01dad9798750f6c7a3a0ab8f9da904d514d8845b4e77ea785a94748e'
              alt='404-not-found'
            />
          )}
        </Row>
      )}
    </>
  );
}

export default function FavoritePage({ params }: HomeProps) {
  return (
    <FavoriteProvider>
      <FavoriteElement params={params}></FavoriteElement>
    </FavoriteProvider>
  );
}
