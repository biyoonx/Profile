import React from 'react';
import './ContentsContainer.css';

export default function ContentsContainer({ contents: Contents }) {
  return (
    <div className="contents_container">
      <Contents />
    </div>
  );
}
