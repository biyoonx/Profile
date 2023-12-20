import React from 'react';
import './ContentsBox.css';

import ContentsTitle from './ContentsTitle';
import ContentsContainer from './ContentsContainer';

export default function ContentsBox({ title, contents }) {
  return (
    <div className='contents_box'>
      <ContentsTitle title={title} />
      <ContentsContainer contents={contents} />
    </div>
  );
}
