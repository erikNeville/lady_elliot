import * as React from 'react';

type CustomContext<T> = readonly [() => T, React.Provider<T | undefined>];

export function createCustomContext<T>(): CustomContext<T> {
  const customContext = React.createContext<T | undefined>(undefined);
  function useCustomContext() {
    const c = React.useContext(customContext);
    if (!c) {
      throw new Error(
        'useCustomContext must be inside a Provider with a value.',
      );
    }
    return c;
  }
  return [useCustomContext, customContext.Provider] as const;
}
