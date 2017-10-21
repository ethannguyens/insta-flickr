import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as instaFlickrActions from '../../../actions/instaFlickrActions';

import Flickr from '../../../api/flickr';

import './ImageCard.scss';

class ImageCard extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.favouriteHandler = this.favouriteHandler.bind(this);
  }

  favouriteHandler() {
    console.log('favouriteHandler');
    this.item.save ? this.props.actions.removeItem(this.props.index, this.item) : this.props.actions.saveItem(this.props.index, this.item);
  }

  customClass() {
    return this.item.save ? 'image-card image-card--saved' : 'image-card';
  }

  render() {
    this.item = this.props.instaFlickr.items[this.props.index];
    return (
      <article className={this.customClass()}>
        <img src={Flickr.getImgSize(this.item.media.m, "large")} alt={this.item.title} className="image-card__img"/>
        <div className="image-card-overlay">
          <div className="image-card-overlay__title">{this.item.title}</div>
          <button className="image-card-overlay__save" onClick={this.favouriteHandler}>Save</button>
        </div>
      </article>
    )
  }
}

ImageCard.propTypes = {
  index: PropTypes.number.isRequired,
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
