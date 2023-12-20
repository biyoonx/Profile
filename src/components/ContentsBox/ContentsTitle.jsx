import React from 'react';
import './ContentsTitle.css'

export default function ContentsTitle({ title }) {
  return (
    <div className='contents_title'>
      <p>{title}</p>
    </div>
  );
}
