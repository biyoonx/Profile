import React from 'react';
import { Link } from 'react-router-dom';
import './ContentsContact.css';

export default function ContentsContact({ contents }) {
  return (
    <ul className="cont">
      {contents.map((item, index) => {
        let content = item.content;
        let isLinked;
        switch (item.type) {
          case 'email':
            content = `mailto:${content}`;
            isLinked = true;
            break;
          case 'mobile':
          case 'tel':
            content = `tel:+82${content}`;
            isLinked = true;
            break;
          default:
            isLinked = false;
        }

        return (
          <li key={index}>
            {isLinked ? (
              <Link to={content} target="_blank">
                {item.content}
              </Link>
            ) : (
              item.content
            )}
          </li>
        );
      })}
    </ul>
  );
}
