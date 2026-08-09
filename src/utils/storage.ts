export const getStorageItem = <T>(key: string, value: T): T => {
  const stored = localStorage.getItem(key);
  if (stored === null) {
    return value;
  }

  try {
    return JSON.parse(stored);
  } catch (error) {
    return value;
  }
};

export const setStorageItem = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};
