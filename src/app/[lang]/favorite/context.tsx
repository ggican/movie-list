import { getLoveLocalStorage, onLoveGetFromLocalStorage } from '@/lib/card';
import { ILoveValue, MovieList, useMovieList } from '@/services/movie';
import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState
} from 'react';

type FavoriteProvidersProps = {
  children?: Array<ReactElement> | ReactElement;
};

const DEFAULT_CONTEXT = {
  isLoading: true,
  onLove: () => {},
  displayData: []
};

type FavoriteContextProps = {
  displayData: MovieList[];
  isLoading: boolean;
  onLove: (values: ILoveValue) => void;
};
type ILoveProps = {
  [key: number]: boolean;
};

const FavoriteContext = createContext<FavoriteContextProps>(DEFAULT_CONTEXT);

const useFavoriteContext = () => useContext(FavoriteContext);

const FavoriteProvider: React.FC<FavoriteProvidersProps> = ({ children }) => {
  const { data, isLoading }: any = useMovieList();
  const [allData, setAllData] = useState<MovieList[]>([]);
  const [displayData, setDisplayData] = useState<MovieList[]>([]);
  const [loadDataLoading, setLoadDataLoading] = useState<boolean>(true);

  const onSetValueLove = (currentLove: ILoveProps, data: MovieList[]): void => {
    localStorage.setItem('love', JSON.stringify(currentLove));
    const result = data
      .map(item => {
        return {
          ...item,
          love: currentLove[item?.id]
        };
      })
      .filter(item => item?.love);
    setDisplayData(result);
    setLoadDataLoading(false);
  };

  const onGetData = (data: MovieList[]) => {
    const currentLove = getLoveLocalStorage();
    onSetValueLove(currentLove, data);
  };

  const onLove = (values: ILoveValue) => {
    const currentLove = onLoveGetFromLocalStorage(values);
    onSetValueLove(currentLove, displayData);
  };

  useEffect(() => {
    if (!isLoading && data) {
      setAllData(data?.data);
      if (data?.data?.length > 0) {
        onGetData(data?.data);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isLoading]);

  const props = {
    isLoading: loadDataLoading,
    displayData,
    onLove
  };
  return (
    <FavoriteContext.Provider value={{ ...props }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export { FavoriteProvider, useFavoriteContext };
