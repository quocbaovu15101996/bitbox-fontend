import { FC, useEffect } from 'react';
import './index.less';
import Loading from 'assets/logo/loading.svg';
import { setUserItem } from 'stores/user.store';
import { useDispatch } from 'react-redux';

const LoadingSpinner: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setUserItem({
        isPageHome: window.location.href === window.location.origin + '/'
      })
    );
    // console.log(window.location.href === window.location.origin + '/');
  }, [dispatch]);
  return (
    <div className="flex h-full items-center justify-center loading w-full">
      <img src={Loading} alt="" className="loading-page w-12 h-12" />
    </div>
  );
};

export default LoadingSpinner;
