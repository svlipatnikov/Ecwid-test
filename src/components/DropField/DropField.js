import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addImagesFromDropAction } from 'redux/actions/galeryAction';
import './dropField.scss';

const DropField = () => {
  const [dropFieldClasses, setDropFieldClasses] = useState(['drop-field']);
  const dispatch = useDispatch();

  const handleDragEnter = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDropFieldClasses(['drop-field', 'drop-field--drop-enter']);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDragLeave = () => {
    setDropFieldClasses(['drop-field']);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(addImagesFromDropAction(event.dataTransfer.files));
    setDropFieldClasses(['drop-field']);
  };

  return (
    <div
      className={dropFieldClasses.join(' ')}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    />
  );
};

export default DropField;
