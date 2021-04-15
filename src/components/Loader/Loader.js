import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addImagesFromJsonFileAction, addImageFromUrlAction } from 'redux/actions/galeryAction';
import './loader.css';

export default function Loader() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isImageUrl(input)) {
      dispatch(addImageFromUrlAction(input));
    } else if (isServerJsonFile(input)) {
      dispatch(addImagesFromJsonFileAction(input));
    } else if (isLocalJsonFile(input)) {
      dispatch(addImagesFromJsonFileAction(input));
    } else {
      // TODO err input
      console.log('Not supported. Please enter image url or json file url');
    }
    setInput('');
  };

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="loader">
      <form className="loader__form" onSubmit={handleSubmit}>
        <input type="text" className="loader__form__input" onChange={handleInput} value={input} />
        <button className="loader__form__button">Загрузить</button>
      </form>
    </div>
  );
}

const isImageUrl = (url) => {
  const regExpImage = /^https?:\/\/.+\.(?:jpe?g|gif|png)$/gi;
  return !!regExpImage.exec(url);
};

const isServerJsonFile = (url) => {
  const regExpJson = /^https?:\/\/.+\.json$/gi;
  return !!regExpJson.exec(url);
};

const isLocalJsonFile = (url) => {
  const regExpJson = /^file:\/\/\/.+\.json$/gi;
  return !!regExpJson.exec(url);
};
