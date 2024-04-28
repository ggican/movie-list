import { getIntl } from '@/lib/intl';
import { Metadata } from 'next';
import HomePage from './home';

type RouteProps = {
  params: { lang: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(props: RouteProps): Promise<Metadata> {
  const intl = await getIntl(props.params.lang);
  return {
    title: intl.formatMessage({ id: 'page.home.head.title' }),
    description: intl.formatMessage({
      id: 'page.home.head.meta.description'
    })
  };
}

type HomeProps = {
  params: { lang: string };
};

export default async function Home({ params: { lang } }: HomeProps) {
  return <HomePage params={{ lang }}></HomePage>;
}
