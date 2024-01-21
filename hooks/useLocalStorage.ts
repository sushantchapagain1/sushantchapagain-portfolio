'use client';
import { useEffect, useState } from 'react';

export function useLocalStorage(initialValue: unknown, key: string) {
  const [value, setValue] = useState(function () {
    const storedValue =
      typeof window !== 'undefined' && localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(
    function () {
      typeof window !== 'undefined' &&
        localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key],
  );

  return [value, setValue];
}
