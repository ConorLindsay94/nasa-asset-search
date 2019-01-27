import React, { Component } from 'react';

class Header extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  determineMedia(item) {
    switch(item.data[0]['media_type']) {
      case 'image':
        return (
          <div
            className="view-asset__asset__image"
            style={{ backgroundImage: `url(${item.links[0].href})` }}
          />
        )
      case 'audio':
        return (
          <audio
              controls
              src={item.mediaLinks.items.find(media => media.href.indexOf('.mp3') > -1).href}>
                  Your browser does not support the
                  <code>audio</code> element.
          </audio>
        )
      case 'video':
        return (
          <video
              controls
              src={item.mediaLinks.items.find(media => media.href.indexOf('.mp4') > -1).href}>
                  Your browser does not support the
                  <code>video</code> element.
          </video>
        )
      default: return null;
    }
  }

  render() {
    const { activeItem } = this.props;
    return (
      <section className="view-asset">
        <div className="view-asset__title">
          <h1>{activeItem.data[0].title}</h1>
        </div>
        <div className="view-asset__asset">
          {this.determineMedia(activeItem)}
        </div>
        <div className="view-asset__desc">
          <p dangerouslySetInnerHTML={{__html: activeItem.data[0].description}} />
        </div>
      </section>
    )
  }

}

export default Header;