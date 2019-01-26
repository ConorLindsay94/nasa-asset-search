import changeCase from 'change-case';

export default (mediaArray) => {
  let mediaTypes = mediaArray;
  const media = ['image', 'audio', 'video'];

  if (!mediaTypes.find(type => typeof type === 'object')) {
    mediaTypes = media.map(type => (
      {
        type,
        value: mediaTypes.some(mediaType => mediaType === type) || false,
        prettyName: changeCase.titleCase(type),
      }
    ));
  }
  return [...mediaTypes];
};
