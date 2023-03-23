import * as React from 'react';

import type { LocaleDir } from './types';

export const LocaleDirContext = React.createContext<LocaleDir>('ltr');

LocaleDirContext.displayName = 'LocaleDirContext';
