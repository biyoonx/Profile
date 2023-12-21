import React from 'react';
import './ContentsContact.css'

export default function ContentsContact({ contents }) {
  return (
    <ul className='cont'>
      {contents.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
