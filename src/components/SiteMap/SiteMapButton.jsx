import React from 'react';
import './SiteMapButton.css';
import sitemap from '../../contents/sitemap.svg';

export default function SiteMapButton({ btnText, btnAction }) {
  return (
    <div className="sitemap_box">
      <button className="sitemap_button" onClick={btnAction}>
        <img src={sitemap} alt="sitemap" />
        <p>{btnText}</p>
      </button>
    </div>
  );
}
