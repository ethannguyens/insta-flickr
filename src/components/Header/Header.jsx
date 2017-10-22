import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

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
    const menu = document.querySelector('.header_menuIcon');
    const header = document.querySelector('.header');
    if (menu) {
      menu.addEventListener('click', () => {
        if (header.classList.contains('active')) header.classList.remove('active');
        else header.classList.add('active');
      });
    }
  }

  render() {
    return (
      <div className="header">
        <div className="logo">E/N</div>
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
