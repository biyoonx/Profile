import React from 'react';
import { Link } from 'react-router-dom';
import './ContentsIntroduction.css';

export default function ContentsIntroduction({ contents, more }) {
  return (
    <div className="intro">
      <ul className="intro_list">
        {contents.map((item, index) => {
          if (item && typeof item !== 'string') {
            return (
              <li
                key={index}
                dangerouslySetInnerHTML={{ __html: item.hasTag }}
              ></li>
            );
          }
          return <li key={index}>{item}</li>;
        })}
      </ul>
      {more && (
        <Link
          to={more.link}
          className="link"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          {more.text}
        </Link>
      )}
    </div>
  );
}
