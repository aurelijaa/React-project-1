import React from 'react';
import './index.scss';

function Header() {
  return (
    <header className="Header">
      <h1>AURELIJA KASPARAVIČIŪTĖ</h1>
      <hr />
      <p className="Header--contact">Phone: +37061529753</p>
      <p className="Header--contact">
        Email:{' '}
        <a
          href="mailto:aurelija@czv.lt"
          target="_blank"
          rel="noopener noreferrer"
        >
          aurelija@czv.lt
        </a>
      </p>
      <p className="Header--sumary">
        We lcome to our Minions Ipsum website dedicated to Lorem generating
        text. Did you know this text had been used in the printing industry
        since the 1500s basically in Latin? Well, now we came up with the idea
        to make Lorem Ipsum funnier, in a form of a bit silly but well-known
        Minisons' language. Hope you appreciate our humor So how exactly to use
        the generator? While designing a new site, or web page copy the
        following 1, 2, 3, and 4 paragraphs with plain lorem ipsum text to fill
        in the template (or your default model) for your future content. It is
        convenient to see how the content with the actual distribution of
        letters and spaces in paragraphs will be displayed.
      </p>
      <img
        className="Header--profile-picture"
        alt="This is me"
        src="https://thechive.files.wordpress.com/2019/02/hiddenthings.jpg?quality=85&strip=info&w=600&h=450&crop=1"
      />
    </header>
  );
}

export default Header;
