import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as instaFlickrActions from '../../actions/instaFlickrActions';


import ImageSection from './ImageSection';

class InstaFlickr extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="insta-flickr">
        <ImageSection />
      </div>
    )
  }
}

InstaFlickr.propTypes = {
  items: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
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

export default connect(mapStateToProps, mapDispatchToProps)(InstaFlickr);
