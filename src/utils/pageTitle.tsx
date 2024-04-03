import { useEffect, useRef } from 'react';

export enum PageTitle {
  Home = 'Coge | Home',
  Register = 'Coge | Register',
  Login = 'Coge | Login',
}

export const useDocumentTitle = (title: string, prevailOnUnmount = false): void => {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(
    () => () => {
      if (!prevailOnUnmount) {
        document.title = defaultTitle.current;
      }
    },
    [],
  );
};
