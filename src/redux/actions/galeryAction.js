import { ADD_IMAGE_FROM_JSON_FILE, DELETE_IMAGE, ADD_IMAGE_FROM_URL } from 'redux/types';
import { isChangedCalcAction } from './calcAction';

export const deleteImageAction = (deleteIndex) => ({ type: DELETE_IMAGE, payload: deleteIndex });

export const addImageAction = (image) => ({ type: ADD_IMAGE_FROM_URL, payload: image });

export const handleDeleteImageAction = (deleteIndex) => (dispatch) => {
  dispatch(deleteImageAction(deleteIndex));
  dispatch(isChangedCalcAction());
};

export const addImageFromUrlAction = (url) => (dispatch) => {
  const newImage = new Image();
  newImage.src = url;
  newImage.onload = () => {
    dispatch(addImageAction({ url, height: newImage.height, width: newImage.width }));
    dispatch(isChangedCalcAction());
  };
  newImage.onerror = () => {
    // TODO onerror img
  };
};

export const addImageFromJsonFileAction = () => {
  return { type: ADD_IMAGE_FROM_JSON_FILE, payload: [] };
};
