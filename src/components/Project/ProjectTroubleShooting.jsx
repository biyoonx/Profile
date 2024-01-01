import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectTroubleShooting.css';

export default function ProjectTroubleShooting({ contents }) {
  return (
    <ul className="troubleShooting">
      {contents.map((item) => (
        <li key={item.desc}>
          <Link to={item.link} target="_blank">
            <img src={item.image} alt={item.desc} />
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  );
}
