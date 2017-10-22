import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as instaFlickrActions from '../../actions/instaFlickrActions';

import './SearchBar.scss';

class SearchBar extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.loadFeeds = this.loadFeeds.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  loadFeeds(event) {
    this.props.actions.loadFeeds(this.state.value);
    event.preventDefault();
  }
  
  render() {
    return (
        <form className="search-bar" onSubmit={this.loadFeeds}>
          <input type="text" className="search-bar__input" value={this.state.value} onChange={this.handleChange} placeholder="What do you want to see?" />
            <button type="submit" className="search-bar__button" onClick={this.loadFeeds}>
              <i className="saerch-bar__icon" />
              Search
            </button>
        </form>
    )
  }
}

SearchBar.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
