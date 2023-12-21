import React from 'react';
import { Link } from 'react-router-dom';
import './ContentsChannel.css';

export default function ContentsChannel({ contents }) {
  return (
    <ul className="chan">
      {contents.map((item, index) => {
        return (
          <li key={index}>
            <Link to={item.link} target="_blank">
              <img src={item.mainImage} alt={item.desc} />
            </Link>
            <div>
              <img src={item.subImage} alt={item.desc} />
              <p>{item.text}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
