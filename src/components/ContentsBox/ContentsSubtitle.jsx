import React from 'react';
import './ContentsSubtitle.css';

export default function ContentsSubtitle({ title }) {
  return (
    <div className="subtitle">
      <h6>{title}</h6>
    </div>
  );
}
