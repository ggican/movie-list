import { getIntl } from '@/lib/intl';
import { Metadata } from 'next';
import FavoritePage from './components/FavoritePage';

type RouteProps = {
  params: { lang: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(props: RouteProps): Promise<Metadata> {
  const intl = await getIntl(props.params.lang);
  return {
    title: intl.formatMessage({ id: 'page.favorite.head.title' }),
    description: intl.formatMessage({
      id: 'page.favorite.head.meta.description'
    })
  };
}

type HomeProps = {
  params: { lang: string };
};

export default async function Home({ params: { lang } }: HomeProps) {
  return <FavoritePage params={{ lang: lang }}></FavoritePage>;
}
