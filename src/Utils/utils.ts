export const rgbToHex = (rgb: number[]) =>
  '#' +
  rgb
    .map((x) => {
      const hex = x.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    })
    .join('');
