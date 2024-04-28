import 'server-only';

const dictionaries: any = {
  en: () => import('../../hooks/dictionaries/en.json').then(module => module.default),
  id: () => import('../../hooks/dictionaries/id.json').then(module => module.default)
};

export const getDictionary: any = async (locale: any) => dictionaries[locale]();
