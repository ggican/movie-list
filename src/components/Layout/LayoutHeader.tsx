'use client';
import { Layout } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const { Header } = Layout;

type LayoutSideBarProps = {
  params: {
    lang: string;
  };
};

export default function LayoutHeader({ params }: LayoutSideBarProps) {
  return (
    <Header
      style={{
        display: 'flex',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 999,
        width: '100%'
      }}
    >
      <Link style={{ marginRight: 10 }} href={`/${params?.lang}`}>
        Home
      </Link>
      <Link href={`/${params?.lang}/favorite`}>Favorite</Link>
    </Header>
  );
}
