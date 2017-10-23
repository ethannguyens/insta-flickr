import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import SearchBar from '../SearchBar/SearchBar';

require('./MenuIcon.scss');
require('./Header.scss');

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.eventHandler = this.eventHandler.bind(this);
  }

  componentDidMount() {
    this.eventHandler();
  }

  eventHandler() {
    const menu = this.header.querySelector('.header_menuIcon');
    console.log(menu);
    if (menu) {
      menu.addEventListener('click', () => {
        if (this.header.classList.contains('active')) this.header.classList.remove('active');
        else this.header.classList.add('active');
      });
    }
  }

  render() {
    return (
      <div className="header" ref={(div) => {this.header = div;}}>
        <SearchBar />
        <div className="header_menuIcon">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className="header_nav">
          <ul className="Grid header_navItems">
            {this.props.menu.map((item, i) => {
              return (
                <li key={i} className={`header_navItem header_navItem-${item.id}`}>
                  <Link key={i} className={`header_navItemLink header_navItemLink-${item.id}`} to={`/${item.link}`} activeClassName="active">{item.text}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  }
}

Header.propTypes = {
  menu: PropTypes.array.isRequired
};

export default Header;
