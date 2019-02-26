import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import data from './data';

function Header(props) {
  const { language, onLanguage } = props;
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
        onChange={event => onLanguage(event.target.value )}
      >
        <option value="en">English</option>
        <option value="kr">코리안</option>
      </select>
    </header>
  );
}

Header.propTypes = {
  language: PropTypes.oneOf(['en', 'kr']),
  onLanguage: PropTypes.func.isRequired,
};

Header.defaultProps = {
  language: 'en',
};

export default Header;
