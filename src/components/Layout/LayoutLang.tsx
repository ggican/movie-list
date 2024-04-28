'use client';
import { FloatButton } from 'antd';
import { usePathname } from 'next/navigation';

type LayoutLangProps = {
  params: {
    lang: string;
  };
};

export default function LayoutLang({ params }: LayoutLangProps) {
  const pathname: string = usePathname();
  const currentUrl = pathname?.replace('/id', '');
  return (
    <FloatButton.Group
      type='primary'
      trigger='click'
      style={{ right: 10, bottom: 10 }}
      description={params?.lang.toUpperCase()}
      icon={''}
    >
      <FloatButton shape='circle' href={`${currentUrl}`} description='EN' />
      <FloatButton shape='circle' href={`/id${currentUrl}`} description='ID' />
    </FloatButton.Group>
  );
}
