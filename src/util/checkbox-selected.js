export default (mediaTypes) => {
  const checkedMedia = mediaTypes.find(type => type.value);

  if (checkedMedia) {
    return true;
  }
  return false;
};
