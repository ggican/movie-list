import { useQuery } from 'react-query';

export type SuccessResponse<TData> = {
  code: 'SUCCESS';
  message: string;
  data: TData;
  serverTime: string;
};

export type ErrorResponse<ErrorData = undefined> = {
  code:
    | 'ERROR'
    | 'RUNTIME_ERROR'
    | 'MISSING_ACCESS_TOKEN'
    | 'UNAUTHORIZED'
    | 'DUPLICATE_DATA'
    | 'FAILED_TO_UPLOAD_ACTIVITY_IN_PROGRESS';
  data: null;
  message: string;
  serverTime?: string;
  status?: number;
  errors?: ErrorData;
};

export type PaginationResponseType = {
  totalElements: number;
  totalPages: number;
  numberOfElements: number;
};
export type PageableResponseType = {
  sort: {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
  };
  pageNumber: number;
  pageSize: number;
  offset: number;
  paged: boolean;
  unpaged: boolean;
};
export type NewPageableResponseType = {
  total: number;
  totalPage: number;
  page: number;
  size: number;
};

export type DataWithPagination<TContent> = {
  content: TContent[];
  pagination: PaginationResponseType;
};

export type DataWithPageable<TContent> = PaginationResponseType & {
  content: TContent[];
  pageable: PageableResponseType;
};

export type DataWithNewPageable<TContent> = {
  content: TContent[];
  pageable: NewPageableResponseType;
};

export type APIResponse<TData, ErrorData = undefined> =
  | SuccessResponse<TData>
  | ErrorResponse<ErrorData>;

export const error = (e: unknown): ErrorResponse => {
  return {
    code: 'RUNTIME_ERROR',
    message: e instanceof Error ? e.message : 'Oops, something went wrong!',
    data: null
  };
};

const ENDPOINT = 'https://private-2fff44-bncfetest.apiary-mock.com/movies';

export type MovieArgs = {
  startDate: Date;
  endDate: Date;
};

export type ILoveValue = {
  id: number;
  value: boolean;
};

export type MovieList = {
  id: number;
  title: string;
  year: number;
  rating: number;
  love?: boolean;
  imageUrl: string;
  desc: string;
  onLove: (values: ILoveValue) => void;
};

const getMovieService = async (): Promise<APIResponse<MovieList[]>> => {
  try {
    const result = await fetch(`${ENDPOINT}`);
    return await result.json();
  } catch (e) {
    return error(e);
  }
};

export function useMovieList() {
  return useQuery(['list-movie'], () => getMovieService(), {
    onError: err => console.error('error fetching holidays', err)
  });
}
