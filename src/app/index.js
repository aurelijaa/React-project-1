import React from 'react';
import { FaGithubAlt } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

import './index.scss';

function App() {
  return (
    <React.Fragment>
      <div className="App">
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
            since the 1500s basically in Latin? Well, now we came up with the
            idea to make Lorem Ipsum funnier, in a form of a bit silly but
            well-known Minisons' language. Hope you appreciate our humor So how
            exactly to use the generator? While designing a new site, or web
            page copy the following 1, 2, 3, and 4 paragraphs with plain lorem
            ipsum text to fill in the template (or your default model) for your
            future content. It is convenient to see how the content with the
            actual distribution of letters and spaces in paragraphs will be
            displayed.
          </p>
          <img
            className="Header--profile-picture"
            alt="This is me"
            src="https://thechive.files.wordpress.com/2019/02/hiddenthings.jpg?quality=85&strip=info&w=600&h=450&crop=1"
          />
        </header>
        <main>
          <setion className="Section">
            <div className="Section--left">
              <h3>Education</h3>
            </div>
            <div className="Section--right">
              <h3>Gyvenimo Universitetas</h3>
              <p>
                <span>Major:</span>
                Programuotojas
              </p>
              <p>
                <span>Mindor:</span>
                Mokytojas
              </p>
            </div>
          </setion>

          <setion className="Section">
            <div className="Section--left">
              <h3>Skils</h3>
            </div>
            <div className="Section--right">
              <div>
                <h3>Singing</h3>
                <p>
                  Minisons language. Hope you appreciate our humor So how
                  exactly to use the generator? While designing a new site, or
                  web page copy the following 1, 2, 3, and 4 paragraphs with
                  plain lorem ipsum text to fill in the template (or your
                  default model) for your future content. It is convenient to
                  see how the content with the actual distribution of letters
                  and spaces in paragraphs will be displayed.
                </p>
              </div>
              <div>
                <h3>Singing</h3>
                <p>
                  Minisons language. Hope you appreciate our humor So how
                  exactly to use the generator? While designing a new site, or
                  web page copy the following 1, 2, 3, and 4 paragraphs with
                  plain lorem ipsum text to fill in the template (or your
                  default model) for your future content. It is convenient to
                  see how the content with the actual distribution of letters
                  and spaces in paragraphs will be displayed.
                </p>
              </div>
            </div>
          </setion>

          <setion className="Section">
            <div className="Section--left">
              <h3>Experience</h3>
            </div>
            <div className="Section--right">
              <div>
                <div className="Section--right-job-title">
                  <h3>Code Academy</h3>
                  <span> Very good student 2018.10-spanaaaaaa</span>
                </div>
                <ul>
                  <li>HTML</li>
                  <li>CSS/SCSS</li>
                  <li>JavaScript</li>
                  <li>Node.js</li>
                  <li>React.js</li>
                </ul>
              </div>
              <div>
                <div className="Section--right-job-title">
                  <h3>My Life</h3>
                  <span> Never to finish learning</span>
                </div>
                <ul>
                  <li>Calculating</li>
                  <li>Talking</li>
                  <li>Writing</li>
                </ul>
              </div>
              <div>
                <h3>Code Academy</h3>
                <ul>
                  <li>HTML</li>
                  <li>CSS/SCSS</li>
                  <li>JavaScript</li>
                  <li>Node.js</li>
                  <li>React.js</li>
                </ul>
              </div>
            </div>
          </setion>

          <setion className="Section">
            <div className="Section--left">
              <h3>Hobies</h3>
            </div>
            <div className="Section--right">
              <p>Singing with thebears, eating and sleeping with the books</p>
            </div>
          </setion>

          <setion className="Section">
            <div className="Section--left">
              <h3>References</h3>
            </div>
            <div className="Section--right">
              <p>A lot can say my granmather</p>
            </div>
          </setion>
        </main>
      </div>
      <footer className="Footer">
        <a
          href="https://github.com/aurelijaa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubAlt />
        </a>
        <a
          href="https://github.com/aurelijaa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.linkedin.com/in/aurelija-kasparavi%C4%8Di%C5%ABt%C4%97-199480171"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
      </footer>
    </React.Fragment>
  );
}

export default App;
