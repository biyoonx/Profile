import React from 'react';
import { Link } from 'react-router-dom';
import './HomeLink.css';

export default function HomeLink({ homeInfo }) {
  const { text, link } = homeInfo;

  return (
    <div className="home_link">
      <Link to={link} onClick={() => window.scrollTo(0, 0)}>
        {text}
      </Link>
    </div>
  );
}
