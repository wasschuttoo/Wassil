import React from 'react';
import '../styles/About.css';
import profileImg from '../assets/profileImage.png'; // updated file name

const About = () => {
  const birthDate = new Date(1998, 8, 6); // September is month 8 (0-indexed)
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return (
    <section className="about-section">
      <div className="about-card">
        <img src={profileImg} alt="Profile" />
        <h2>Wassil Chuttoo</h2>
        <h4>Software Developer in Test III</h4>
        <p className="about-age-location">
          <span className="about-age">{age} years old</span> &middot; Mauritius
        </p>
        <div className="about-bio">
          <p>
            Passionate IT professional with a focus on automation and quality. Started as a Test Engineer in 2021, transitioned to SDET, and currently working as SDET III since 2022.
          </p>
          <p>
            Experienced in Agile teams, building and maintaining automated test frameworks to ensure software quality and reliability.
          </p>
        </div>
        <div className="about-skills">
          <h5>Skills & Tools</h5>
          <div className="about-skills-icons">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" title="Java"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" title="C#"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" title="JavaScript"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" title="TypeScript"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MSSQL" title="MSSQL"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" alt="Selenium" title="Selenium"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg" alt="Cypress" title="Cypress"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg" alt="Playwright" title="Playwright"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;