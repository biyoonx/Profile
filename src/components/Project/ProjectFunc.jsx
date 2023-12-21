import React, { useState } from 'react';
import './ProjectFunc.css';

export default function ProjectFunc({ contents }) {
  const { title, architecture, more } = contents;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="project_func">
      <div className="project_func_title">
        <h6>{title}</h6>
      </div>
      <img
        className="project_architecture"
        src={architecture[+isOpen].image}
        alt={architecture[+isOpen].desc}
      />
      <div className="project_func_toggle">
        <button onClick={() => setIsOpen((show) => !show)}>
          {more.button[+isOpen]}
        </button>
      </div>
      {isOpen && (
        <ul className="project_func_list">
          {more.contents.map((item) => (
            <li key={item.content}>
              {item.content}
              <ul>
                {item.desc.map((desc) => (
                  <li key={desc}>- {desc}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
