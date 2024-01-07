import React from 'react';
import './TopButton.css';

export default function TopButton() {
  const toTopText = '▲맨 위로';

  return (
    <button
      className="topButton"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    >
      {toTopText}
    </button>
  );
}
