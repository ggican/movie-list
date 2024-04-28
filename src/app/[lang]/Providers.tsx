'use client';

import { QueryClient, QueryClientProvider } from 'react-query';
import { Layout } from 'antd';
import { LayoutSideBar } from '@/components/Layout/LayoutSidebar';
import LayoutHeader from '@/components/Layout/LayoutHeader';
import LayoutLang from '@/components/Layout/LayoutLang';
const { Content } = Layout;

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000
      }
    }
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (typeof window === 'undefined') {
    // Server: always make a new query client
    return makeQueryClient();
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

export default function Providers({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: {
    lang: string;
  };
}>) {
  const queryClient = getQueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <Layout>
          <LayoutSideBar params={params}></LayoutSideBar>
          <Layout>
            <LayoutHeader params={params}></LayoutHeader>
            <Content style={{ padding: '48px 48px' }}>{children}</Content>
          </Layout>
          <LayoutLang params={params}></LayoutLang>
        </Layout>
      </main>
    </QueryClientProvider>
  );
}
