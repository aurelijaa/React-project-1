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
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
