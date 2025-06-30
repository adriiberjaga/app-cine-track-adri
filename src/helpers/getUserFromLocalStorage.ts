export function getItemFromLocalStorage<T>(key: string): T | null {
  const itemLocalStorage = localStorage.getItem(key);
  const item = itemLocalStorage ? JSON.parse(itemLocalStorage) : null;

  return item;
}
