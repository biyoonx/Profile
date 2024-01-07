import React from 'react';
import './ContentsToyProjectDesc.css';

export default function ContentsToyProjectDesc({ content }) {
  return (
    <div className="toy_project_desc">
      <ul className="toy_project_desc_list">
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
