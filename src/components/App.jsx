// This component handles the App template used on every page.
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {isTouchDevice} from '../modules/utility';
import Header from './Header/Header';
import Footer from './Footer/Footer';

import {menu, footer, term, social} from '../database/database';


import '../styles/main.scss';
import './App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.menu = menu;
    this.footer = footer;
    this.term = term;
    this.social = social;
  }

  componentDidMount() {
    this.touchDevice = isTouchDevice();
    if (!this.touchDevice) this.addNontouchClass();
  }

  addNontouchClass() {
    this.div.classList.add('nontouch');
  }

  render() {
    return (
      <div className='nguyene-insta-flickr' ref={(div) => {this.div = div;}}>
        <Header menu={this.menu}/>
        {this.props.children}
        <Footer footer={this.footer}
                title="Let's get to know me better"
                link="ethan.nguyens@gmail.com"
                text="© 2017 Ethan Nguyen. All rights reserved"
                term={this.term}
                social={this.social}
        />
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
