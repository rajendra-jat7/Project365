import React from 'react';
import Profile from '../assets/Profile.jpg';
import './ProfileCard.css';

function ProfileCard() {
  return (
    <div className='profile-card'>
      <img src={Profile} alt='Profile' className='profile-photo' />
      <h1 className='profile-name'>Rajendra Jat</h1>
      <p className='profile-bio'>
        Front-End Developer with expertise in modern web technologies including
        JavaScript (ES6+), Typescript, React, Vue.js, Vite, TailwindCSS, HTML,
        and CSS. Skilled in building Responsive and Dynamic Web Applications.
        Experienced in Core Java from previous full-stack development
        experience. Dedicated to enhancing UI/UX and collaborating effectively
        in team environments.
      </p>
    </div>
  );
}

export default ProfileCard;
