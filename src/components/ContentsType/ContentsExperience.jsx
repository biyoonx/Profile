import React from 'react';
import './ContentsExperience.css';

export default function ContentsExperience({ contents }) {
  return (
    <ul className="experi">
      {contents.map((item, index) => {
        const idx = item.indexOf('\n');

        return (
          <li key={index}>
            {item.slice(0, idx)}
            <ul>
              <li>{item.slice(idx + 1)}</li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
}
