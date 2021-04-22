import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { calcAction } from 'redux/actions/calcAction';
import DropField from 'components/DropField';
import ErrorMessage from 'components/ErrorMessage';
import Galery from 'components/Galery';
import Loader from 'components/Loader';
import './app.scss';

const App = () => {
  const dispatch = useDispatch();
  const contentRef = useRef(null);

  useEffect(() => {
    dispatch(calcAction());

    const resizeEvent = () => {
      dispatch(calcAction());
    };

    window.addEventListener('resize', resizeEvent);
  }, [dispatch]);

  return (
    <div className="app" ref={contentRef}>
      <ErrorMessage />
      <Loader />
      <Galery />
      <DropField />
    </div>
  );
};

export default App;
