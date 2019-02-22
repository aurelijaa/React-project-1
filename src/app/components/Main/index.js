import React from 'react';
import './index.scss';

function Main() {
  return (
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
              Minisons language. Hope you appreciate our humor So how exactly to
              use the generator? While designing a new site, or web page copy
              the following 1, 2, 3, and 4 paragraphs with plain lorem ipsum
              text to fill in the template (or your default model) for your
              future content. It is convenient to see how the content with the
              actual distribution of letters and spaces in paragraphs will be
              displayed.
            </p>
          </div>
          <div>
            <h3>Singing</h3>
            <p>
              Minisons language. Hope you appreciate our humor So how exactly to
              use the generator? While designing a new site, or web page copy
              the following 1, 2, 3, and 4 paragraphs with plain lorem ipsum
              text to fill in the template (or your default model) for your
              future content. It is convenient to see how the content with the
              actual distribution of letters and spaces in paragraphs will be
              displayed.
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
  );
}
export default Main;
