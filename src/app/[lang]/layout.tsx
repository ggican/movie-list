import type { Metadata } from 'next';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Poppins } from 'next/font/google';
import './globals.css';
import StyledComponentsRegistry from '@/lib/registry';
import Providers from './Providers';
import { getDirection } from '@/lib/intl';

export async function generateStaticParams() {
  return [{ lang: 'id-ID' }, { lang: 'id' }];
}

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: { lang: string };
};

export default function RootLayout({
  children,
  params
}: Readonly<RootLayoutProps>) {
  const { lang } = params;
  const dir = getDirection(lang);
  return (
    <html lang={params.lang} dir={dir}>
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <AntdRegistry>
            <Providers params={params}>{children}</Providers>
          </AntdRegistry>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
