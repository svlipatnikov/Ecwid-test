import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { newErrorAction } from 'redux/actions/errorAction';
import { addImagesFromJsonFileAction, addImageFromUrlAction } from 'redux/actions/galeryAction';
import './loader.scss';

export default function Loader() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input === '') {
      dispatch(newErrorAction('Please enter image url or json file url'));
    } else if (isImageUrl(input)) {
      dispatch(addImageFromUrlAction(input));
    } else if (isJsonFile(input)) {
      dispatch(addImagesFromJsonFileAction(input));
    } else {
      dispatch(newErrorAction('Not supported url. Please enter image url or json file url'));
    }
    setInput('');
  };

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="loader">
      <form className="loader__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Put here url to image or json file"
          className="loader__form__input"
          onChange={handleInput}
          value={input}
        />
        <button className="loader__form__button">Загрузить</button>
      </form>
    </div>
  );
}

const isImageUrl = (url) => {
  const regExpImage = /^https?:\/\/.+\.(?:jpe?g|gif|png)$/gi;
  return !!regExpImage.exec(url);
};

const isJsonFile = (url) => {
  const regExpJson = /^https?:\/\/.+\.json$/gi;
  return !!regExpJson.exec(url);
};
