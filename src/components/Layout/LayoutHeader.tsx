'use client';
import { Layout } from 'antd';
import Link from 'next/link';

const { Header } = Layout;

type LayoutHeaderProps = {
  params: {
    lang: string;
  };
};

export default function LayoutHeader({ params }: LayoutHeaderProps) {
  return (
    <Header
      style={{
        display: 'flex',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 999,
        width: '100%',
        backgroundColor: '#fff'
      }}
    >
      <Link style={{ marginRight: 10 }} href={`/${params?.lang}`}>
        Home
      </Link>
      <Link href={`/${params?.lang}/favorite`}>Favorite</Link>
    </Header>
  );
}
