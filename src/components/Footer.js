import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Wassil Chuttoo. All rights reserved.</p>
      <div>
        {/* <a href="https://github.com/wasschuttoo" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style={{ width: 20, verticalAlign: 'middle', marginRight: 6 }} />
          GitHub
        </a> */}
        <span> | </span>
        <a href="https://www.linkedin.com/in/wassilchuttoo" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" style={{ width: 20, verticalAlign: 'middle', marginRight: 6 }} />
        </a>
        <span> | </span>
        <a href="https://wa.me/23054885938" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" style={{ width: 20, verticalAlign: 'middle', marginRight: 6 }} />
        </a>
        <span> | </span>
        <a href="tel:+23054885938">
          <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" alt="Call" style={{ width: 20, verticalAlign: 'middle', marginRight: 6 }} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;