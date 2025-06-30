import { useState } from 'react';

export function useToggle(initialState = false) {
  const [isShown, setIsShown] = useState(initialState);

  function toggleShown() {
    setIsShown(!isShown);
  }

  //! el as const sirve para que TypeScript entienda que el tipado de cada uno de los valores se va a mantener en ese orden, el primero será boolean y el segundo la función, si no lo ponemos verás que da errores al desestructurarlo luego
  return [isShown, toggleShown] as const;
}
