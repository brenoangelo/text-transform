import React, { useEffect, useState, createContext, useContext } from 'react';

import { useLocalStorage } from '../hooks/useLocalStorage';

const MENU_OPTIONS = [
  { label: 'colocar hífens', value: 'hifen' },
  { label: 'remover acentuação', value: 'accent' },
  { label: 'capitalizar', value: 'capitalized' },
  { label: 'adicionar aspas duplas', value: 'double-quotes' },
  {
    label: 'adicionar virgulas entre',
    value: 'comma',
  },
];

interface ContextData {
  onChangeTextOptions: (option: string, active: boolean) => void;
  onChangeAllTextOptions: (option: string, active: boolean) => void;
  menuOptions: typeof MENU_OPTIONS
  textOptions: string[]
}

const TextContext = createContext<ContextData>({} as ContextData);

export function TextContextProvider({ children }: React.PropsWithChildren) {
  const [storage, setStorage] = useLocalStorage<string[]>('@transform:options');
  const [textOptions, setTextOptions] = useState<string[]>([]);

  useEffect(() => {
    storage && setTextOptions?.(storage);
  }, []);

  function onChangeTextOptions(option: string, active: boolean) {
    const textOptionsCopy = Array.from(textOptions ?? []);

    active
      ? textOptionsCopy.push(option)
      : textOptionsCopy.splice(
          textOptionsCopy.findIndex((item) => item === option),
          1,
        );

    setStorage(textOptionsCopy);
    setTextOptions?.(textOptionsCopy);
  }

  function onChangeAllTextOptions(option: string, active: boolean) {
    const allOptions =
      MENU_OPTIONS?.map((item) => item.value).filter(
        (item) => item !== 'all',
      ) ?? [];

    let textOptionsCopy = active ? allOptions : [];

    setStorage(textOptionsCopy);
    setTextOptions?.(textOptionsCopy);
  }

  return (
    <TextContext.Provider
      value={{ onChangeTextOptions, onChangeAllTextOptions, menuOptions: MENU_OPTIONS, textOptions }}
    >
      {children}
    </TextContext.Provider>
  );
}

export function useTextContext() {
  return useContext(TextContext);
}
