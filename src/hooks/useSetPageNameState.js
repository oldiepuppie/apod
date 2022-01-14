import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { pageState } from '../recoil/atoms';

const useSetPageNameState = (pageName) => {
  const setPageState = useSetRecoilState(pageState);
  useEffect(() => {
    setPageState(pageName);
  }, []);
};

export default useSetPageNameState;
