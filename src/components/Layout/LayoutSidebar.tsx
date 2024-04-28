/* eslint-disable @next/next/no-img-element */
'use client';

import { Layout } from 'antd';
import { LayoutSidebar } from './LayoutSidebar.style';
import useLang from '@/hooks/dictionaries';

const { Sider } = Layout;

const items = new Array(5).fill(null).map((_, index) => ({
  key: index + 1,
  title: `Title Movie ${index + 1}`,
  description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
  earum tenetur id placeat minima dolorum reprehenderit error
  maxime et ut. Quo veniam accusantium cupiditate quae porro
  adipisci inventore facere sint.`
}));

type MovieListRecent = {
  title: string;
  description: string;
};

type LayoutSideBarProps = {
  params: {
    lang: string;
  };
};

export function LayoutSideBar({ params }: LayoutSideBarProps) {
  const t = useLang(params?.lang);
  return (
    <Sider
      width={350}
      style={{ background: '#fff' }}
      breakpoint='lg'
      collapsedWidth='0'
    >
      <LayoutSidebar>
        <p>{t('movieNews')}</p>
        <div className='sidebar-content'>
          <div className='title'>
            <h4>{t('recentMovie')}</h4>
          </div>
          {items?.map((item: MovieListRecent, key: number) => {
            return (
              <div key={key} className='sidebar-list'>
                <div className='sidebar-list-image'>
                  <img
                    src='https://cdn.oneesports.id/cdn-data/sites/2/2023/06/Marvel-RuangDM.jpg'
                    alt='cover'
                  />
                </div>
                <div className='sidebar-list-title'>
                  <h4>{item?.title}</h4>
                  <p>{item?.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className='sidebar-content'>
          <div className='title'>
            <h4>{t('trendingMovie')}</h4>
          </div>
          {items?.map((item: MovieListRecent, key: number) => {
            return (
              <div key={key} className='sidebar-list'>
                <div className='sidebar-list-image'>
                  <img
                    src='https://cdn.oneesports.id/cdn-data/sites/2/2023/06/Marvel-RuangDM.jpg'
                    alt='cover'
                  />
                </div>
                <div className='sidebar-list-title'>
                  <h4>{item?.title}</h4>
                  <p>{item?.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </LayoutSidebar>
    </Sider>
  );
}
