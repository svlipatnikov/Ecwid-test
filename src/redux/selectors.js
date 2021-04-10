// galery
export const galleryImagesSelector = (store) => store.imagesReducer.galleryImages;

// calc
export const isChangedSelector = (store) => store.calcReducer.isChanged;
export const galeryWidthSelector = (store) => store.calcReducer.galeryWidth;
export const cardsSelector = (store) => store.calcReducer.cardsArr;
export const rowsSelector = (store) => store.calcReducer.rowsArr;
