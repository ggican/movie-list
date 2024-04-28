'use client';
import { Col, Row } from 'antd';
import { MovieList } from '@/services/movie';
import InfiniteScroll from '@/components/InfiniteScroll/InfiniteScroll';
import MovieCardSlider from './components/MovieCardSlider/MovieCardSlider';
import MovieSliderLoading from './components/MovieCardSlider/MovieSliderLoading';
import MovieCardLoading from './components/MovieCard/MovieCardLoading';
import MovieCard from './components/MovieCard/MovieCard';
import { HomeProvider, useHomeContext } from './context';

type HomeProps = {
  params: {
    lang: string;
  };
};
function HomeElement({ params }: HomeProps) {
  const { data, isLoading, onLove, onLoadData } = useHomeContext();
  return (
    <>
      {isLoading ? (
        <MovieSliderLoading></MovieSliderLoading>
      ) : (
        <MovieCardSlider></MovieCardSlider>
      )}

      <InfiniteScroll
        threshold={50}
        isLoading={isLoading}
        onLoadData={onLoadData}
        loadingComponent={
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
        }
      >
        <Row gutter={[24, 30]}>
          {data?.length > 0 &&
            data?.map((item: MovieList, key: number) => {
              return (
                <Col key={key} xs={24} sm={12} md={12} lg={12} xl={8}>
                  <MovieCard {...item} onLove={onLove}></MovieCard>
                </Col>
              );
            })}
        </Row>
      </InfiniteScroll>
    </>
  );
}

export default function HomePage({ params }: HomeProps) {
  return (
    <HomeProvider>
      <HomeElement params={params}></HomeElement>
    </HomeProvider>
  );
}
