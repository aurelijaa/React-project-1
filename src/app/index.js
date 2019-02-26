import React from 'react';

import { Header, Main, Footer } from './components';
// import Main from './components/Main';
// import Footer from './components/Footer';
import './index.scss';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Header />
        <Main />
        <select className="App--language-select">
          <option>En</option>
          <option>Ko</option>
        </select>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
