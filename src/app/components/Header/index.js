import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import data from './data';

// function Header(props) {
class Header extends React.Component {
  componentWillMount() {
    console.log('Will mount');
  }

  componentDidMount() {
    console.log('Did');
  }

  componentWillReceiveProps(nextProps) {
    console.log('Will receive, this.prop', this.props);
    console.log('Will receive, this.prop', nextProps);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('should', nextProps, nextState);
  //   // console.log('Will receive, this.prop', nextProps);
  //   if (nextProps.language === 'kr') {
  //     return false;
  //   }
  // }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivered', props, state);
    return { animate: 'in' };
  }

  componentDidUpdate(props, state, snapshot) {
    console.log('updateComponent', props, state, snapshot);
  }

  componentWillUnmount() {
    console.log('componentwillunmount');
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('snapshot', prevProps);
    console.log('snapshot', prevState);
    return 'Labas';
  }

  render() {
    // throw Error('You can not see header');

    console.log('rend');
    // const { language, onLanguage } = props;
    const { language, onLanguage } = this.props;
    const { name, contacts, picture, summary } = data[language];
    // console.log(props)
    return (
      <header className="Header">
        <h1>{name}</h1>
        <hr />
        <p className="Header--contact">
          {`${contacts.phone.label} ${contacts.phone.value}`}
        </p>
        <p className="Header--contact">
          {`${contacts.email.label}`}
          <a
            href="mailto:aurelija@czv.lt"
            target="_blank"
            rel="noopener noreferrer"
          >
            {contacts.email.value}
          </a>
        </p>
        <p className="Header--sumary">{summary}</p>
        <img
          className="Header--profile-picture"
          alt={picture.alt}
          src={picture.src}
        />
        <select
          value={language}
          onChange={event => onLanguage(event.target.value)}
        >
          <option value="en">English</option>
          <option value="kr">코리안</option>
        </select>
      </header>
    );
  }
}
Header.propTypes = {
  language: PropTypes.oneOf(['en', 'kr']),
  onLanguage: PropTypes.func.isRequired,
};

Header.defaultProps = {
  language: 'en',
};

export default Header;
