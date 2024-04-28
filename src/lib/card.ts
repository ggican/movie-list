import { ILoveValue } from '@/services/movie';

type ILoveProps = {
  [key: number]: boolean;
};

export const onLoveGetFromLocalStorage = (values: ILoveValue) => {
  const localData = localStorage.getItem('love') || '{}';
  const loveData = JSON.parse(localData) || [];
  const currentLove: any = loveData;
  currentLove[values?.id] = values?.value;
  return currentLove;
};

export const getLoveLocalStorage = (): ILoveProps => {
  const localData = localStorage.getItem('love') || '{}';
  const loveData = JSON.parse(localData) || {};
  return loveData;
};
