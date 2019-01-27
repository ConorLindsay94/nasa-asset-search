import React from 'react';

export default (item) => {
  const mediaType = item.data[0]['media_type'];
  switch (mediaType) {
    case 'image':
      return (
        <div
          className="search__results__item-image"
          style={{ backgroundImage: `url(${item.links[0].href})` }}
        />
      );
    case 'audio':
      return (
        <div
          className="search__results__item-image"
          style={{ backgroundColor: '#000000' }}
        >
          <svg>
            <title>Audio Media</title>
            <desc>An audio icon to indicate that the piece of media is of type audio.</desc>
            <use xlinkHref="#icon-audio" />
          </svg>
        </div>
      );
    case 'video':
      return (
        item.mediaLinks &&
          <div
            className="search__results__item-image"
            style={{
              backgroundImage: `url("${
                item.mediaLinks.items.find(mediaItem => mediaItem.href.indexOf('.png') > -1).href
              }")`,
            }}
          >
            <svg>
              <title>Video Media</title>
              <desc>A video icon to indicate that the piece of media is of type video.</desc>
              <use xlinkHref="#icon-video" />
            </svg>
          </div>
      );
    default: return null;
  }
};
