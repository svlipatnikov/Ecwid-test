import DropField from 'components/DropField';
import ErrorMessage from 'components/ErrorMessage';
import Galery from 'components/Galery';
import Loader from 'components/Loader';
import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { handleGaleryWidthAction } from 'redux/actions/calcAction';
import './app.scss';

const App = () => {
  const dispatch = useDispatch();
  const contentRef = useRef(null);

  useEffect(() => {
    const resizeEvent = () => {
      if (contentRef.current) {
        dispatch(handleGaleryWidthAction(contentRef.current.clientWidth));
      }
    };
    resizeEvent();

    window.addEventListener('resize', resizeEvent);
    return () => {
      window.removeEventListener('resize', resizeEvent);
    };
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
