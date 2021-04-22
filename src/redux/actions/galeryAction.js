import { ADD_IMAGES_ARRAY, DELETE_IMAGE, ADD_IMAGE } from 'redux/types';
import { calcAction } from './calcAction';
import { newErrorAction } from './errorAction';

const deleteImageAction = (deleteIndex) => ({ type: DELETE_IMAGE, payload: deleteIndex });

const addImageAction = (image) => ({ type: ADD_IMAGE, payload: image });

const addImagesFromArrayAction = (imagesArray) => ({
  type: ADD_IMAGES_ARRAY,
  payload: imagesArray,
});

export const handleDeleteImageAction = (deleteIndex) => (dispatch) => {
  dispatch(deleteImageAction(deleteIndex));
  dispatch(calcAction());
};

export const addImageFromUrlAction = (url) => (dispatch) => {
  const newImage = new Image();
  newImage.src = url;
  newImage.onload = () => {
    dispatch(addImageAction({ url, height: newImage.height, width: newImage.width }));
    dispatch(calcAction());
  };
  newImage.onerror = () => {
    dispatch(newErrorAction(`Error on image loading on url: ${url}`));
  };
};

export const addImagesFromDropAction = (files) => (dispatch) => {
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (file.type.startsWith('image/')) {
      const image = new Image();

      const reader = new FileReader();
      reader.onload = () => (image.src = reader.result);
      reader.readAsDataURL(file);

      image.onload = () => {
        dispatch(addImageAction({ url: image.src, height: image.height, width: image.width }));
        dispatch(calcAction());
      };
    } else if (file.type === 'application/json') {
      file
        .text()
        .then((text) => JSON.parse(text))
        .then((data) => {
          if (data.galleryImages) {
            dispatch(addImagesFromArrayAction(data.galleryImages));
            dispatch(calcAction());
          } else {
            dispatch(
              newErrorAction(
                'Not supported file data. Json file should contain "galleryImages" array'
              )
            );
          }
        })
        .catch((error) => {
          dispatch(newErrorAction(`Error in json file parsing: ${error}`));
        });
    } else {
      dispatch(newErrorAction(`${file.name} - file type is not supported`));
    }
  }
};

export const addImagesFromJsonFileAction = (jsonUrl) => (dispatch) => {
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
          dispatch(addImagesFromArrayAction(data.galleryImages));
          dispatch(calcAction());
        } else {
          dispatch(
            newErrorAction(
              'Not supported file data. Json file should contain "galleryImages" array'
            )
          );
        }
      } else {
        dispatch(newErrorAction('Emty file data. Json file should contain "galleryImages" array'));
      }
    })
    .catch((error) => {
      dispatch(newErrorAction(`Error in fetch: ${error}`));
    });
};
