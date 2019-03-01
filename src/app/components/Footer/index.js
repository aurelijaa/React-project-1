import React from 'react';
import data from './data';

import ErrorBoundry from '../ErrorBoundary';
import IconLink from './IconLink';
import './index.scss';

function Footer() {
  return (
    <ErrorBoundry message={<div>Mama vire kose!!!!</div>}>
      <footer className="Footer">
        {data.map(({ href, icon }, index) => (
          <IconLink key={index} href={href} icon={icon} />
        ))}
      </footer>
    </ErrorBoundry>
  );
}

export default Footer;
