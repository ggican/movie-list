/* eslint-disable @next/next/no-img-element */
import { getIntl } from '@/lib/intl';
import { Metadata, ResolvingMetadata } from 'next';
import { cache } from 'react';
import MovieCardDetail from './components/MovieCardDetail';

type RouteProps = {
  params: { lang: string; id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

type MoveDetailProps = {
  params: { lang: string; id: string };
};

const ENDPOINT = 'https://private-2fff44-bncfetest.apiary-mock.com/movies';
const getMovieDetailService = cache(async (id: string): Promise<any> => {
  try {
    const result = await fetch(`${ENDPOINT}/${id}`);
    return await result.json();
  } catch (e) {
    return e;
  }
});

export async function generateMetadata(
  props: RouteProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { data }: any = await getMovieDetailService(props?.params?.id);
  const previousImage = (await parent).openGraph?.images || [];
  return {
    title: data?.title,
    description: data?.desc,
    openGraph: {
      images: [data?.imageUrl, ...previousImage]
    }
  };
}

export default async function MoveDetail({ params }: MoveDetailProps) {
  const { data } = await getMovieDetailService(params?.id);
  return (
    <div>
      <MovieCardDetail
        lang={params?.lang}
        id={params?.id}
        data={data}
      ></MovieCardDetail>
    </div>
  );
}
