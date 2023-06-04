import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const PRODUCT_NAME = [
  "Machine d'emballage",
  "Robot de soudure",
  "Convoyeur à bande",
  "Scie circulaire",
  "Presse hydraulique",
  "Tour CNC",
  "Imprimante 3D",
  "Fraiseuse",
  "Pont roulant",
  "Étau de serrage",
  "Équipement de levage",
  "Scie à ruban"
];
const PRODUCT_COLOR = ['#00AB55', '#000000', '#FFFFFF', '#FFC0CB', '#FF4842', '#1890FF', '#94D82D', '#FFC107'];

// ----------------------------------------------------------------------

const products = [...Array(6)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover: `/assets/images/products/materiel_${setIndex}.jpg`,
    name: PRODUCT_NAME[index],
    price: faker.datatype.number({ min: 4, max: 99, precision: 0.01 }),
    priceSale: setIndex % 3 ? null : faker.datatype.number({ min: 19, max: 29, precision: 0.01 }),
    colors:
      (setIndex === 1 && PRODUCT_COLOR.slice(0, 2)) ||
      (setIndex === 2 && PRODUCT_COLOR.slice(1, 3)) ||
      (setIndex === 3 && PRODUCT_COLOR.slice(2, 4)) ||
      (setIndex === 4 && PRODUCT_COLOR.slice(3, 6)) ||
      (setIndex === 23 && PRODUCT_COLOR.slice(4, 6)) ||
      (setIndex === 24 && PRODUCT_COLOR.slice(5, 6)) ||
      PRODUCT_COLOR,
    status: sample(['sale', 'new', '', '']),
  };
});

export default products;
