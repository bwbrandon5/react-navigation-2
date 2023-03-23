import * as React from 'react';

import { LocaleDirContext } from './LocaleDirContext';
import type { LocaleDir } from './types';

/**
 * Hook to access the text direction specified in the `NavigationContainer`.
 */
export function useLocaleDir(): LocaleDir {
  const dir = React.useContext(LocaleDirContext);

  if (dir === undefined) {
    throw new Error(
      "Couldn't determine the text direction. Is your component inside NavigationContainer?"
    );
  }

  return dir;
}
