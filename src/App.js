import Galery from 'components/Galery';
import Loader from 'components/Loader';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setContentWidthAction } from 'redux/actions/calcAction';

// import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const resizeEvent = () => {
      dispatch(setContentWidthAction());
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
