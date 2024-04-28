import { useEffect, useRef, useState } from 'react';

const useIntersection = (last: any, rootMargin: number): any => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection, {
      root: null,
      rootMargin: `0px 0px ${rootMargin}px 0px`
    });
    const refLast = last.current;
    if (refLast) {
      observer.observe(refLast);
    }
    return () => {
      observer.unobserve(refLast);
    };
  }, [last, rootMargin]);

  const onIntersection = (entries: any) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        setIntersecting(entry.isIntersecting);
      }
    });
  };

  return [isIntersecting, setIntersecting];
};

type InfiniteScrollProps = {
  children: React.ReactNode;
  onLoadData: () => void;
  threshold: number;
  loadingComponent: React.ReactNode;
  isLoading: boolean;
};

const InfiniteScroll = (props: InfiniteScrollProps) => {
  const { children, onLoadData, threshold, loadingComponent, isLoading } =
    props;
  const ref = useRef<any>();
  const refLast = useRef<any>();
  const [isIntersecting, setIntersecting] = useIntersection(refLast, threshold);

  useEffect(() => {
    if (isIntersecting && !isLoading) {
      onLoadData();
      setIntersecting(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isIntersecting, isLoading]);

  return (
    <div ref={ref}>
      {children}

      <div style={{ marginTop: 24 }} ref={refLast}>
        {isLoading ? loadingComponent : false}
      </div>
    </div>
  );
};

export default InfiniteScroll;
