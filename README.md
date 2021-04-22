# Галерея изображений

Тестовое задание для ecwid

Деплой на gh pages: https://svlipatnikov.github.io/ecwid-test/

---

## Функционал

- Возможность добавить картинку по url
- Добавление изображений из файла \*.json по url
- Возможность добавить картинку или \*.json через drag-n-drop
- Drag-n-drop нескольких файлов одновременно
- Удаление изображений по кнопке "корзина" на изображении
- Вывод попапов с ошибкой при введении неверных данных

---

## Настройки и ограничения

Ограничения приведены в файле **_restrictions/index.js_**

- **containerMaxWidth** - максимальная ширина галереи (установлено 860px)
- **containerMinWidth** - минимальная ширина галереи (установлено 320px)
- **rowNormalHeight** - высота строки по умолчанию для выполнения расчетов. Если строка галереи не заполнена на 100%, то высота строки увеличивается до полного заполнения ширины строки (установлено 150px)
- **rowMaxHeight** - максимальная высота последней строки галереи. Если в последней строке мало изображений, то они не заполняют всю строку (установлено rowNormalHeight \* 1.2)
- **imagePadding** - отсутпы у изображений галереи (установлено 3px)

---

## Инструкция по сборке

- Скачать проект
- Установить зависимости npm install
- Запустить проект npm start

---

## Формат файла json

```javascript
{
	"galleryImages" : [
		{
			"url": "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/493550746.jpg",
			"width": 640,
			"height": 426
		},
		{
			"url": "https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964007.jpg",
			"width": 1920,
			"height": 1200
		},
	]
}
```

---

## Ресурсы

Для проверки можно использовать следующие ресурсы:

#### URL изображений

https://don16obqbay2c.cloudfront.net/frontend-test-task/images/493550746.jpg

https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964007.jpg

#### URL файла json

https://don16obqbay2c.cloudfront.net/frontend-test-task/gallery-images.json
