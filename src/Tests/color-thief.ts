import { getColor, getColorFromURL, getPaletteFromURL } from 'color-thief-node';

const imageUrl =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Firefox_Logo%2C_2017.svg/1024px-Firefox_Logo%2C_2017.svg.png';

const image = new Image();
image.src = imageUrl;
getColor(image);

getColorFromURL(imageUrl).then((color) => {
  color;
});

getPaletteFromURL(imageUrl).then((color) => {
  color[0];
});
