/*
NOTE: The reduce here transforms the above array into an Object of
key/value pairs of the same name, ensuring
there can never be a mis-typed value
e.g.,
  {
    a: 'a',
    b: 'b'
  }
*/
export default function arrayToObject(array) {
  return array.reduce((obj, current) => {
    obj[current] = current;
    return obj;
  }, {});
}
