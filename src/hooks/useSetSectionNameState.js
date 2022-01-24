import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { sectionNameState } from '../recoil/atoms';

const useSetSectionNameState = (sectionName) => {
  const setSectionState = useSetRecoilState(sectionNameState);
  useEffect(() => {
    setSectionState(sectionName);
  }, []);
};

export default useSetSectionNameState;
