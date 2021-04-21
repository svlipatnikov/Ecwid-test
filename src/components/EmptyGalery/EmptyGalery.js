import React from 'react';
import './emptyGalery.scss';

const EmptyGalery = () => (
  <div className="empty-galery">
    <h2>Галерея пуста</h2>
    <p>Введите путь к изображению / файлу *.json или перетащите их в данное поле</p>
  </div>
);

export default EmptyGalery;
