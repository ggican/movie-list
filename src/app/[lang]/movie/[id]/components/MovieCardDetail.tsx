'use client';
/* eslint-disable @next/next/no-img-element */
import useLang from '@/hooks/dictionaries';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Col, Flex, Rate, Row } from 'antd';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

function MovieCardDetail({
  lang,
  data
}: {
  id: string;
  lang: string;
  data: any;
}) {
  const router = useRouter();
  const t = useLang(lang);
  const refImage = useRef(null);
  const [isZoom, setZoom] = useState<boolean>(false);
  const handleClickImage = () => {
    setZoom(!isZoom);
  };

  useEffect(() => {
    const handleEsc = (event: any) => {
      if (event?.keyCode === 27) {
        setZoom(false);
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);
  return (
    <div>
      <Button
        type='link'
        onClick={() => {
          router?.back();
        }}
        icon={<ArrowLeftOutlined />}
      >
        Back
      </Button>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={12} lg={12} xl={8}>
          <div
            className={
              isZoom
                ? 'fixed z-[999] bg-[#00000078] top-0 left-0 right-0 bottom-0 flex justify-center items-center'
                : ''
            }
          >
            <div className='h-[500px]'>
              <img
                ref={refImage}
                onClick={handleClickImage}
                className='block h-full w-full object-cover cursor-pointer rounded-[20px]'
                src={data?.imageLargeUrl}
                alt=''
              />
            </div>
          </div>
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={16}>
          <div className='flex flex-col'>
            <h1 className='text-[40px] font-sans'>{data?.title}</h1>
            <div className='flex flex-row items-center mb-[10px]'>
              <p className='text-[14px] text-[#1677ff] font-semibold'>
                {data?.year}
              </p>
              <span className='w-[3px] inline-block h-[3px] rounded-full bg-black ml-[5px] mr-[5px]'></span>
              <p className='text-[14px] text-[#1677ff] font-semibold'>
                {data?.duration}
              </p>{' '}
              <span className='w-[3px] inline-block h-[3px] rounded-full bg-black ml-[5px] mr-[5px]'></span>
              <p className='text-[14px] text-[#1677ff] font-semibold'>
                {data?.genre}
              </p>
            </div>
            <Flex gap='middle' vertical>
              <Rate value={data?.rating} disabled />
            </Flex>
            <p className='my-[5px] text-[14px]'>
              <b>{t('releaseDate')}: </b>
              {data?.releaseDate}
            </p>
            {data?.starring && data?.starring.length > 0 && (
              <div className='flex flex-row'>
                <b className='text-[14px]'>{t('star')}</b>
                {data?.starring?.map((item: string, key: number) => {
                  return (
                    <p
                      className='text-[14px] text-[#1677ff] ml-[5px] inline-flex cursor-pointer'
                      key={key}
                    >
                      {item}
                    </p>
                  );
                })}
              </div>
            )}
            <p className='mt-[12px] text-[16px]'>{t('movieDesc')}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default MovieCardDetail;
