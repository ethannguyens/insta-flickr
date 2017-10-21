import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as instaFlickrActions from '../../actions/instaFlickrActions';

import Flickr from '../../api/flickr';

class ImageCard extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const item = this.props.instaFlickr.items[this.props.item];
    return (
      <article className="image-card">
        <img src={Flickr.getImgSize(item.media.m, "large")} alt="" className="image-card__img"/>
        <div className="image-card-overlay">
          <div className="image-card-overlay__title">{item.title}</div>
          <button className="image-card-overlay__save">Save</button>
        </div>
      </article>
    )
  }
};

ImageCard.propTypes = {
  item: PropTypes.number.isRequired,
  instaFlickr: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    instaFlickr: state.instaFlickr
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(instaFlickrActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageCard);
