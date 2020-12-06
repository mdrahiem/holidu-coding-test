export default function arrayToObject(array) {
  return array.reduce((obj, current) => {
    obj[current] = current;
    return obj;
  }, {});
}
