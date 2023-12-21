import React from 'react';
import './ContentsCoverLetter.css';

export default function ContentsCoverLetter({ contents }) {
  return (
    <ul className="coverLetter">
      {contents.map((item, index) => (
        <li key={index}>
          <h6>{item.subtitle}</h6>
          <p dangerouslySetInnerHTML={{ __html: item.content }}></p>
        </li>
      ))}
    </ul>
  );
}
