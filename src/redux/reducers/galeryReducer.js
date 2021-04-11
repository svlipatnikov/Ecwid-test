import { galleryImages } from 'resources/images';
import { ADD_IMAGE_FROM_URL, ADD_IMAGE_FROM_JSON_FILE, DELETE_IMAGE } from 'redux/types';

const imagesReducerInit = {
  galleryImages,
};

const imagesReducer = (state = imagesReducerInit, action) => {
  switch (action.type) {
    case ADD_IMAGE_FROM_URL:
      return { ...state, galleryImages: [...state.galleryImages, action.payload] };

    case ADD_IMAGE_FROM_JSON_FILE:
      return {
        ...state,
        galleryImages: [...state.galleryImages, ...action.payload],
      };

    case DELETE_IMAGE:
      const galery = state.galleryImages.filter((image, index) => index !== action.payload);
      return { ...state, galleryImages: galery };

    default:
      return state;
  }
};

export default imagesReducer;
