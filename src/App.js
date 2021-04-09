import Galery from 'components/Galery';
import Loader from 'components/Loader';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCalcResultAction } from 'redux/actions/calcAction';
import { galleryImagesSelector } from 'redux/selectors';

// import './App.css';

const App = () => {
  const galery = useSelector(galleryImagesSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    const resizeEvent = () => {
      dispatch(setCalcResultAction(galery));
    };
    window.addEventListener('resize', resizeEvent);
    return () => {
      window.removeEventListener('resize', resizeEvent);
    };
  }, [dispatch, galery]);

  return (
    <>
      <Loader />
      <Galery />
    </>
  );
};

export default App;
