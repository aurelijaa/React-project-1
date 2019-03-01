import React from 'react';

import { Header, Main, Footer, ErrorBoundary } from './components';
// import Main from './components/Main';
// import Footer from './components/Footer';
import './index.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      language: 'en',
      showHeader: true,
      error: false,
    };
  }

  toggleHeader = () => {
    this.setState(
      state => console.log(state) || { showHeader: !state.showHeader }
    );
  };

  componentDidCatch(error, info) {
    this.setState({ error: true });
    console.log('Error', error);
    console.log('Info', info);
  }

  render() {
    // console.log('render');
    const { language, showHeader, error } = this.state;
    if (error) {
      return <div>Opps something went very wrong!!</div>;
    }
    return (
      <ErrorBoundary message={<div>Oops!!!</div>}>
        <div className="App">
          <button type="button" onClick={this.toggleHeader}>
            <span role="img" aria-label="hide header">
              {showHeader ? '❌' : '✔️'}
            </span>
          </button>
          {showHeader && (
            <Header
              onLanguage={lang => this.setState({ language: lang })}
              language={language}
            />
          )}
          <Main language={language} />
        </div>
        <Footer />
      </ErrorBoundary>
    );
  }
}

export default App;
