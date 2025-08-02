import React from 'react';
import '../styles/Education.css';

const Education = () => {
  return (
    <div className="education-section">
      <h2 className="education-title">Education</h2>
      <ul className="education-list">
        <li className="education-item">
          <h3 className="education-degree">Phoenix State Secondary School Secondary Level Education<br/>2010 - 2016</h3>
          <p className="education-university">2014 - SC 'O' Level</p>
          <p className="education-university">2015 - GCE 'O' Level</p>
          <p className="education-university">2016 - SC 'A' Level</p>
        </li>
        <li className="education-item">
          <h3 className="education-degree">British Computer Society<br/>2017 - 2018</h3>
          <p className="education-university">Certificate in IT</p>
        </li>
        <li className="education-item">
          <h3 className="education-degree">University Of Mauritius<br/>2018 - 2020</h3>
          <p className="education-university">BSc(Hons) Information Systems</p>
        </li>
      </ul>
    </div>
  );
};

export default Education;