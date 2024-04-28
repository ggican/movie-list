import { ILoveValue, MovieList, useMovieList } from '@/services/movie';
import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState
} from 'react';

type HomeProvidersProps = {
  children?: Array<ReactElement> | ReactElement;
};

type MoveListService = {
  data: {
    data: MovieList[];
  };
  isLoading: boolean;
};

type IParams = {
  limit: number;
  page: number;
  totalPage: number;
  total: number;
  lastData: number;
};
const DEFAULT_CONTEXT = {
  i18n: undefined,
  isLoadingSyncNearby: false,
  isDisabledButton: false,
  isLoading: true,
  onChangeQueryParams: () => {},
  onLove: () => {},
  onLoadData: () => {},
  params: {
    limit: 12,
    page: 0,
    totalPage: 0,
    lastData: 0,
    total: 0
  },
  data: [],
  allData: [],
  loveData: {}
};

type HomeContextProps = {
  data: MovieList[];
  allData: MovieList[];
  isLoading: boolean;
  params: IParams;
  onLove: (values: ILoveValue) => void;
  onLoadData: () => void;
};
type ILoveProps = {
  [key: number]: boolean;
};

const HomeContext = createContext<HomeContextProps>(DEFAULT_CONTEXT);

const useHomeContext = () => useContext(HomeContext);

const HomeProvider: React.FC<HomeProvidersProps> = ({ children }) => {
  const { data, isLoading }: any = useMovieList();
  const [allData, setAllData] = useState<MovieList[]>([]);
  const [displayData, setDisplayData] = useState<MovieList[]>([]);
  const [params, setParams] = useState<IParams>(DEFAULT_CONTEXT?.params);
  const [loadDataLoading, setLoadDataLoading] = useState<boolean>(true);
  const onSetValueLove = (currentLove: ILoveProps, data: MovieList[]): void => {
    localStorage.setItem('love', JSON.stringify(currentLove));
    const result = data.map(item => {
      return {
        ...item,
        love: currentLove[item?.id]
      };
    });

    setAllData(
      allData.map(item => {
        return {
          ...item,
          love: currentLove[item?.id]
        };
      })
    );
    setDisplayData(result);
    setLoadDataLoading(false);
  };

  const onSplitData = (data: MovieList[]) => {
    const { limit, page, lastData } = params;
    let totalPage = data?.length / limit;
    if (page === totalPage) {
      return false;
    }
    const displayCurrentData = data?.slice(lastData, lastData + limit) || [];
    const dataDisplay = [...displayData, ...displayCurrentData];

    setParams(prevState => {
      return {
        ...prevState,
        page: page + 1,
        totalPage: data?.length / limit,
        total: data?.length,
        lastData: dataDisplay?.length,
        stopLoad: dataDisplay?.length === data?.length
      };
    });
    const currentLove = onGetLoveLocalStorage();
    onSetValueLove(currentLove, dataDisplay);
  };
  const onGetLoveLocalStorage = (): ILoveProps => {
    const localData = localStorage.getItem('love') || '{}';
    const loveData = JSON.parse(localData) || {};
    return loveData;
  };

  const onLove = (values: ILoveValue) => {
    const localData = localStorage.getItem('love') || '{}';
    const loveData = JSON.parse(localData) || [];
    const currentLove: any = loveData;
    currentLove[values?.id] = values?.value;
    onSetValueLove(currentLove, displayData);
  };

  const onLoadData = () => {
    if (allData.length !== 0 && allData.length !== displayData.length) {
      setLoadDataLoading(true);
      setTimeout(() => {
        onSplitData(allData);
      }, 750);
    }
  };

  useEffect(() => {
    if (!isLoading && data) {
      setAllData(data?.data);
      if (data?.data?.length > 0) {
        setAllData(data?.data);
        setLoadDataLoading(false);
        // onSplitData(data?.data);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isLoading]);

  const props = {
    data: displayData,
    isLoading: loadDataLoading,
    onLove: onLove,
    params,
    onLoadData,
    allData
  };
  return (
    <HomeContext.Provider value={{ ...props }}>{children}</HomeContext.Provider>
  );
};

export { HomeProvider, useHomeContext };
