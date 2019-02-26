import React from 'react';
import './index.scss';
import data from './data.js';

function Header() {
  return (
    <header className="Header">
      <h1>{data.name}</h1>
      <hr />
      <p className="Header--contact">
        {`${data.contacts.phone.label} ${data.contacts.phone.value}`}
      </p>
      <p className="Header--contact">
        {`${data.contacts.email.label}`}
        <a
          href="mailto:aurelija@czv.lt"
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.contacts.email.value}
        </a>
      </p>
      <p className="Header--sumary">{data.summary}</p>
      <img
        className="Header--profile-picture"
        alt={data.picture.alt}
        src={data.picture.src}
      />
    </header>
  );
}

export default Header;
