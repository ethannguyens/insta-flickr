import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as instaFlickrActions from '../../actions/instaFlickrActions';

import ImageCard from '../ImageCard/ImageCard';

class ImageSaveSection extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.getImageCards = this.getImageCards.bind(this);
  }

  getImageCards() {
    console.log(this.props.instaFlickr.savedItems);
    return this.props.instaFlickr.savedItems.map((item, index) => {
      return <ImageCard key={index} index={index} item={item}/>;
    });
  };

  render() {
    return (
      <section className="image-save-section">
        {this.getImageCards()}
      </section>
    )
  }
}

ImageSaveSection.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ImageSaveSection);
