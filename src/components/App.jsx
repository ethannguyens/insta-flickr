// This component handles the App template used on every page.
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {isTouchDevice} from '../modules/utility';

import '../styles/main.scss';

class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.touchDevice = isTouchDevice();
    if (!this.touchDevice) this.addNontouchClass();
  }

  addNontouchClass() {
    document.querySelector('.nguyene-insta-flickr').classList.add('nontouch');
  }

  render() {
    return (
      <div className={'nguyene-insta-flickr'}>
        <div className="title">React-Redux Webpack Express - Ethan Nguyen</div>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
