import urlencode from 'urlencode';

export default(string, decoded) => {
  if (decoded) {
    return urlencode.decode(string);
  }
  return urlencode(string);
};
