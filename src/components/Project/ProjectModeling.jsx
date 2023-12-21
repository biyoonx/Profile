import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectModeling.css'

export default function ProjectModeling({ contents }) {
  const { desc, link } = contents;
  return (
    <div className='modeling'>
      <p>{desc}</p>
      <ul>
        {link.map((item) => (
          <li key={item.text}>
            <Link to={item.link} target="_blank">
              {item.text}
              <img src={item.image} alt={item.desc} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
