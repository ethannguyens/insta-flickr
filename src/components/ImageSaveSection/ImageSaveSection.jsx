import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
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
    let ImageCards = this.props.instaFlickr.items.map((item, index) => {
      if (item.save) return <ImageCard key={index} index={index}/>;
    });
    return ImageCards;
  };

  render() {
    return (
      <section className="image-save-section">
        {this.props.instaFlickr.items.length > 0 && this.getImageCards()}
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
