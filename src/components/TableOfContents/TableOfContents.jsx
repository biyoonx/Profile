import React from 'react';
import './TableOfContents.css';

export default function TableOfContents({ contents, offset }) {
  return (
    <div className="index">
      <p>「</p>
      <h4>{contents.title}</h4>
      <ul>
        {contents.contents.map((item) => (
          <li
            key={item.index}
            onClick={() => {
              window.scrollTo({ top: offset[item.index], behavior: 'smooth' });
            }}
          >
            <span className="index_list_marker">📍</span>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
      <p>」</p>
    </div>
  );
}
