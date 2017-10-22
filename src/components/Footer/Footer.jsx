import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

require('./Footer.scss');

class Footer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.eventHandler = this.eventHandler.bind(this);
  }

  componentDidMount() {
    this.eventHandler();
  }

  eventHandler() {
    const menu = document.querySelector('.footer_menuIcon');
    const footer = document.querySelector('.footer');
    if (menu) {
      menu.addEventListener('click', () => {
        if (footer.classList.contains('active')) footer.classList.remove('active');
        else footer.classList.add('active');
      });
    }
  }

  render() {
    return (
    <div className="footer">

      <nav className="footer-nav">
        <ul className="Grid footer-nav-menu">
          {this.props.footer.map((item, i) => {
            return (
              <li key={i} className={`Grid-cell footer-nav-menu__item footer-nav-menu__item--${item.id}`}>
                <Link key={i} className={`footer-nav-menu__item-link footer-nav-menu__item-link--${item.id}`} to={`/${item.link}`} activeClassName="active">{item.text}</Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="footer-content">
        {this.props.highlight ? <div className="pfooter-highlight">{this.props.highlight}</div> : undefined}
        {this.props.title ? <div className="footer-title">{this.props.title}</div> : undefined}
        {this.props.subtitle ? <div className="footer-subtitle">{this.props.subtitle}</div> : undefined}
        {this.props.text ? <div className="footer-text">{this.props.text} </div> : undefined}
        {this.props.link ? <a href={`mailto:${this.props.link}`} className="footer-link">{this.props.link} </a> : undefined}
      </div>

      <nav className="footer-nav-term">
        <ul className="Grid footer-nav-term-items">
          {this.props.term.map((item, i) => {
            return (
              <li key={i} className={`Grid-cell footer-nav-term__item footer-nav-term__item--${item.id}`}>
                <Link key={i} className={`footer-nav-term__item-link footer-nav-term__item-link--${item.id}`} to={`/${item.link}`} activeClassName="active">{item.text}</Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <nav className="footer-nav-social">
        <ul className="Grid footer-nav-items">
          {this.props.social.map((item, i) => {
            return (
              <li key={i} className={`Grid-cell footer-nav-social__item footer-nav-social__item--${item.id}`}>
                <a href={item.link} key={i} className={`footer-nav-social__item-link footer-nav-social__item-link--${item.id}`}>{item.text}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  )};
}

Footer.propTypes = {
  footer: PropTypes.array.isRequired,
  term: PropTypes.array,
  social: PropTypes.array,
  highlight: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string
};

export default Footer;
