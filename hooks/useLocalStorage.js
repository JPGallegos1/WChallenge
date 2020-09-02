import { useState } from "react";

export function useLocalStorage (key, initialValue) {
  const [user, setUser] = useState(() => {
    try {
      // Get key from ls
      const item = window.localStorage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // if error
      console.log(error);
      return initialValue;
    }
  });

  // Looking to save a value
  const setSession = (value) => {
    try {
      // In case we need to store a function
      // eslint-disable-next-line valid-typeof
      const userToStore = typeof value === Function ? value(user) : value;

      // save the value
      setUser(userToStore);

      // save to ls
      window.localStorage.setItem(key, JSON.stringify(userToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return { user, setSession };
}
