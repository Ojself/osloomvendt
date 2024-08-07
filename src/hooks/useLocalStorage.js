import { useEffect, useState } from 'react';

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(initialValue);

  const [firstLoadDone, setFirstLoadDone] = useState(false);
  useEffect(() => {
    const fromLocal = () => {
      if (typeof window === 'undefined') {
        return initialValue;
      }
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        console.error(error);
        return initialValue;
      }
    };

    // Set the value from localStorage
    setStoredValue(fromLocal);
    // First load is done
    setFirstLoadDone(true);
  }, [initialValue, key]);

  // Instead of replacing the setState function, react to changes.
  // Whenever the state value changes, save it in the local storage.
  useEffect(() => {
    // If it's the first load, don't store the value.
    // Otherwise, the initial value will overwrite the local storage.
    if (!firstLoadDone) {
      return;
    }

    try {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(storedValue));
      }
    } catch (error) {
      console.log(error);
    }
  }, [storedValue, firstLoadDone, key]);

  // Return the original useState functions
  return [storedValue, setStoredValue];
}
