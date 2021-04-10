import Galery from 'components/Galery';
import Loader from 'components/Loader';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { isChangedAction } from 'redux/actions/calcAction';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const resizeEvent = () => {
      dispatch(isChangedAction());
    };
    window.addEventListener('resize', resizeEvent);
    return () => {
      window.removeEventListener('resize', resizeEvent);
    };
  }, [dispatch]);

  return (
    <>
      <Loader />
      <Galery />
    </>
  );
};

export default App;
