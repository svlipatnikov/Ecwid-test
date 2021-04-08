import { galleryImages } from 'resources/images';
import { ADD_IMAGE, DELETE_IMAGE } from '../types';

const imagesReducerInit = {
  galleryImages,
};

const imagesReducer = (state = imagesReducerInit, action) => {
  switch (action.type) {
    case ADD_IMAGE:
      return { ...state };

    case DELETE_IMAGE:
      return { ...state };

    default:
      return state;
  }
};

export default imagesReducer;
