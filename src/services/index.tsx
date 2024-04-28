import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState
} from 'react';
import { useI18n } from '@lib/i18n';

import type { ISyncContext } from '@lib/types/entities/sync';
import type { ILocationParams } from '@lib/types/entities/postBookScore';
import usePatchAtlasNearbyMutation from '@lib/services/atlas/patch-atlas-nearby';
import { snackbar } from '@tiket/passport';
import useGetAtlasNearbyMutation from '@lib/services/atlas/get-atlas-nearby';

const DEFAULT_COUNTRY_ID = '5b73b922e1b2236ea6462402';
const DEFAULT_COUNTRY_ATLAS_ID = '1';

const DEFAULT_VALUE = {
  location: {
    countryId: DEFAULT_COUNTRY_ID,
    countryAtlasId: DEFAULT_COUNTRY_ATLAS_ID,
    regionId: undefined,
    areaAtlasId: undefined,
    areaId: undefined,
    cityId: undefined,
    freeDistrictAtlasId: undefined
  },
  searchType: 'OFFICIAL_DISTRICT'
};

const searchTypeSyncOptions = [
  {
    label: 'Official District',
    value: 'OFFICIAL_DISTRICT'
  },
  {
    label: 'Free District',
    value: 'FREE_DISTRICT'
  }
];

const DEFAULT_CONTEXT = {
  i18n: undefined,
  isLoadingSyncNearby: false,
  isDisabledButton: false,
  onChangeQueryParams: () => {}
};

type ISearchParamsLocationNearby = {
  location?: ILocationParams;
  searchType?: string;
};

const SyncContext = createContext<ISyncContext>(DEFAULT_CONTEXT);

const useSyncContext = () => useContext(SyncContext);

type SyncProvidersProps = {
  children?: Array<ReactElement> | ReactElement;
};

const SyncProvider: React.FC<SyncProvidersProps> = ({ children }) => {
  const props = {};
  return (
    <SyncContext.Provider value={{ ...props }}>{children}</SyncContext.Provider>
  );
};

export { SyncProvider, useSyncContext };
