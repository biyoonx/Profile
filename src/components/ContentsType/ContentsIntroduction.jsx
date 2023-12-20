import React from 'react';
import { Link } from 'react-router-dom';

export default function ContentsIntroduction({ contents, more }) {
  return (
    <div>
      <ul>
        {contents.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Link to={more.link}>{more.text}</Link>
    </div>
  );
}
