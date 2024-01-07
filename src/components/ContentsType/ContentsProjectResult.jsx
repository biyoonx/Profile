import React, { useState } from 'react';
import './ContentsProjectResult.css';

import ContentsSubtitle from '../ContentsBox/ContentsSubtitle';

export default function ContentsProjectResult({ contents }) {
  const title = '실행 결과 예시';
  const dropdownText = ['열기▼', '닫기▲'];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="project_result">
      <ContentsSubtitle title={title} />
      <button onClick={() => setIsOpen((show) => !show)}>
        {dropdownText[+isOpen]}
      </button>
      {isOpen &&
        contents.map((item) => (
          <img src={item.image} alt={item.title} width={item.width} />
        ))}
    </div>
  );
}
