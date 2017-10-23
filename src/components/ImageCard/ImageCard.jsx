import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as instaFlickrActions from '../../actions/instaFlickrActions';

import Flickr from '../../api/flickr';

import './ImageCard.scss';

class ImageCard extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.favouriteHandler = this.favouriteHandler.bind(this);
    this.saveItem = this.saveItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.customClass = this.customClass.bind(this);
    this.isSaved = this.isSaved.bind(this);

  }

  saveItem() {
    this.props.actions.saveItem(this.props.item);
  }

  removeItem() {
    this.props.actions.removeItem(this.props.item);
  }

  favouriteHandler() {
    this.isSaved() ? this.removeItem() : this.saveItem();
  }

  isSaved() {
    for (let item of this.props.instaFlickr.savedItems) {
      if (JSON.stringify(this.props.item) === JSON.stringify(item)) return true
    }
    return false;

  }

  customClass() {
    return this.isSaved() ? 'image-card image-card--saved' : 'image-card';
  }

  render() {
    return (
      <article className={`image-card--${this.props.index} ${this.customClass()}`}>
        <img src={Flickr.getImgSize(this.props.item.media.m, "m")} alt={this.props.item.title}
             className="image-card__img"/>
        <div className="image-card-overlay">
          <p className="image-card-overlay__title">{this.props.item.title}</p>
          <button className="image-card-overlay__save" onClick={this.favouriteHandler}>♥</button>
        </div>
      </article>
    )
  }
}

ImageCard.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
  instaFlickr: PropTypes.object.isRequired
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
