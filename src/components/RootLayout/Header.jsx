import React from 'react';
import './Header.css';

import { header } from '../../contents/Header/header-contents';

export default function Header() {
  const { name, title, image } = header;

  return (
    <div className="header">
      <div>
        <h1>{name}</h1>
        <h3>{title}</h3>
      </div>
      <div className="profile_image">
        <img src={image} alt="profile_image" />
      </div>
    </div>
  );
}
