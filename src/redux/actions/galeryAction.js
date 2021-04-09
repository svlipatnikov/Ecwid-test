const { DELETE_IMAGE } = require('redux/types');

export const deleteImageAction = (deleteIndex) => ({ type: DELETE_IMAGE, payload: deleteIndex });
