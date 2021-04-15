import { ADD_IMAGES_ARRAY, DELETE_IMAGE, ADD_IMAGE } from 'redux/types';
import { isChangedCalcAction } from './calcAction';

const deleteImageAction = (deleteIndex) => ({ type: DELETE_IMAGE, payload: deleteIndex });

const addImageAction = (image) => ({ type: ADD_IMAGE, payload: image });

const addImagesArrayAction = (imagesArray) => ({
  type: ADD_IMAGES_ARRAY,
  payload: imagesArray,
});

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
    // TODO
    console.log('onerror img');
  };
};

export const addImagesFromDropAction = (files) => (dispatch) => {
  console.log('addImagesFromDropAction files:', files);

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (file.type.startsWith('image/')) {
      const image = new Image();
      image.src = window.URL.createObjectURL(file);
      image.onload = () => {
        dispatch(addImageAction({ url: image.src, height: image.height, width: image.width }));
        dispatch(isChangedCalcAction());
      };
    } else {
      // TODO
      console.log(`${file.name} - is not supported file type`);
    }
  }
};

export const addImagesFromJsonFileAction = (jsonUrl) => (dispatch) => {
  console.log('addImageFromJsonFileAction');

  fetch(jsonUrl)
    .then((response) => {
      if (!response.ok) {
        const error = new Error();
        error.response = response;
        throw error;
      }
      return response.text();
    })
    .then((text) => {
      if (text !== '') {
        const data = JSON.parse(text);
        if (data.galleryImages) {
          dispatch(addImagesArrayAction(data.galleryImages));
          dispatch(isChangedCalcAction());
        } else {
          // TODO
          console.log(`Not supported file data. Json file should contain "galleryImages" array`);
        }
      } else {
        // TODO
        console.log('Emty response data. Json file should contain "galleryImages" array');
      }
    })
    .catch((error) => {
      // TODO
      console.log('error', error);
    });
};
