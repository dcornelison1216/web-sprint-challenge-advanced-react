// write your custom hook here to control your checkout form
import { useState } from 'react';

export const useForm = (initialValue, key) => {
  const [value, setValue] = useState(() => {
    if(window.localStorage.getItem(key)) {
      return JSON.parse(window.localStorage.getItem(key));
    }
    return initialValue;
  });

  const setLocalStorageValue = value => {
    window.localStorage.setItem(key, JSON.stringify(value));
    setValue(value);
  };

  return [value, setLocalStorageValue];
};
