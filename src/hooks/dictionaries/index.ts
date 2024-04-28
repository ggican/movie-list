import get from 'lodash/get';
import { useEffect, useState } from 'react';
const dictionaries: any = {
  en: () => import('../../lang/en.json').then(module => module.default),
  id: () => import('../../lang/id.json').then(module => module.default)
};

const getDictionary: any = async (locale: any) => dictionaries[locale]();
const useLang = (lang: string) => {
  const [translate, setTranslate] = useState<any>({});
  const onGetDataLang = async () => {
    const dict = await getDictionary(lang);
    setTranslate(dict);
  };
  useEffect(() => {
    onGetDataLang();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);
  const t = (path: string) => {
    return get(translate, path, '');
  };
  return t;
};

export default useLang;
