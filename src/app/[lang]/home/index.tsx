'use client';
import { Col, Row } from 'antd';
import { MovieList } from '@/services/movie';
import InfiniteScroll from '@/components/InfiniteScroll/InfiniteScroll';
import MovieCardSlider from './components/MovieCardSlider/MovieCardSlider';
import MovieSliderLoading from './components/MovieCardSlider/MovieSliderLoading';
import MovieCardLoading from './components/MovieCard/MovieCardLoading';
import MovieCard from './components/MovieCard/MovieCard';
import { HomeProvider, useHomeContext } from './context';
import Link from 'next/link';
import useLang from '@/hooks/dictionaries';

type HomeProps = {
  params: {
    lang: string;
  };
};
function HomeElement({ params }: HomeProps) {
  const t = useLang(params?.lang);
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
                  <Link prefetch href={`/${params?.lang}/movie/${item?.id}`}>
                    <MovieCard
                      {...item}
                      desc={t('movieDesc')}
                      onLove={onLove}
                    ></MovieCard>
                  </Link>
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
