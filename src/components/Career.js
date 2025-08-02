import React from 'react';
import '../styles/Career.css';

const Career = () => {
  return (
    <div className="career-section">
      <h2 className="career-title">Career</h2>
      <ul className="career-list">
        <li className="career-item">          
          <h3 className="career-company">Accenture Technology - August 2021 to March 2022</h3>
          <p className="career-position">Test Engineer Associate</p>
          <p className="career-description">Manual Testing, Jira, Azure DevOps.</p>
        </li>
        <li className="career-item">
          <h3 className="career-company">Dayforce Mauritius - April 2022 to Present</h3>
          <p className="career-position">Software Developer in Test - April 2022 to November 2024</p>
          <p className="career-position">Software Developer in Test III - November 2024 to Present</p>
          <p className="career-description">Jira, Azure DevOps, GitHub, SpecFlow, MS SQL, Postman, Selenium, C#, Cucumber, Java, JavaScript, TypeScript, Playwright.</p>
        </li>
      </ul>
    </div>
  );
};

export default Career;