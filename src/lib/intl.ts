import 'server-only';

import { createIntl } from '@formatjs/intl';
import type { Locale } from '../../i18n-config';

export async function getIntl(lang: Locale) {
  return createIntl({
    locale: lang,
    messages: (await import(`../lang/${lang}.json`)).default
  });
}

export function getDirection(lang: Locale) {
  switch (lang) {
    case 'ar':
      return 'rtl';
    case 'en':
    case 'id':
    case 'fr':
    case 'nl-NL':
      return 'ltr';
  }
}
