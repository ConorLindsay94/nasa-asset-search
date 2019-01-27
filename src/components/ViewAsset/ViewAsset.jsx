import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns'

class ViewAsset extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);

    if (!this.props.activeItem) {
      this.props.history.push({
        pathname: '/home',
      });
    }
  }

  determineMedia(item) {
    switch(item.data[0]['media_type']) {
      case 'image':
        return (
          <div
            className="view-asset__asset__image"
            style={{ 
              backgroundImage: 
              `url(${item.mediaLinks.items
                .find(media => 
                  media.href.indexOf('.png') > -1 ||
                  media.href.indexOf('.jpg') > -1
                ).href})` 
            }}
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
        {activeItem &&
          <Fragment>
            <div className="view-asset__title">
              <h1>{activeItem.data[0].title}</h1>
            </div>
            <div className="view-asset__meta">
              <div className="view-asset__meta-date">
                <label htmlFor="asset-date-created"><strong>Date Created</strong>: </label>
                <span id="asset-date-created">{format(activeItem.data[0]['date_created'], 'DD/MM/YYYY')}</span>
              </div>
            </div>
            <div className="view-asset__asset">
              {this.determineMedia(activeItem)}
            </div>
            <div className="view-asset__desc">
              <p dangerouslySetInnerHTML={{__html: activeItem.data[0].description}} />
            </div>
          </Fragment>
        }
      </section>
    )
  }
}

ViewAsset.propTypes = {
  activeItem: PropTypes.shape().isRequired,
}

export default ViewAsset;