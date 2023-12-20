import React from 'react';
import { Link } from 'react-router-dom';

export default function ContentsIntroduction({ contents, more }) {
  const underlined = (text) => <span className="underlined">{text}</span>;
  const bold = (text) => <span className="bold">{text}</span>;

  return (
    <div>
      <ul>
        {contents.map((item, index) => {
          if (item && typeof item === string) {
            return <li key={index}>{item}</li>;
          }
          // 배열 요소를 어떻게 li안에 적절하게 나열하지? +로 연결해도 되나?
        })}
        <li>{contents[0][0] + contents[0][1]}</li>
      </ul>
      <Link to={more.link}>{more.text}</Link>
    </div>
  );
}
