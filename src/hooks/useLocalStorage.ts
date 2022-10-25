export function useLocalStorage<T>(
  storageKey: string,
): [storage: T | null, setStorage: (value: T) => void] {
  const itemStoraged: T | null =
    localStorage.getItem(storageKey) &&
    JSON.parse(localStorage.getItem(storageKey) ?? '');

  function setStorage(value: T) {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }

  return [itemStoraged, setStorage];
}
