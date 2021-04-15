import { galleryImages } from 'resources/images';
import { ADD_IMAGE, ADD_IMAGES_ARRAY, DELETE_IMAGE } from 'redux/types';

const imagesReducerInit = {
  galleryImages,
};

const imagesReducer = (state = imagesReducerInit, action) => {
  switch (action.type) {
    case ADD_IMAGE:
      return { ...state, galleryImages: [...state.galleryImages, action.payload] };

    case ADD_IMAGES_ARRAY:
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
