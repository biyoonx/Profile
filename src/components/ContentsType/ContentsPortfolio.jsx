import React from 'react';
import { Link } from 'react-router-dom';
import './ContentsPortfolio.css';

export default function ContentsPortfolio({ contents }) {
  const { team, personal } = contents;

  return (
    <ul className="port">
      <li>
        <Link to={team.link} onClick={() => window.scrollTo(0, 0)}>
          <div>
            <img src={team.mainImage} alt="project_logo" />
            <img src={team.linkImage} alt="link" />
          </div>
        </Link>
        <p>{team.linkText}</p>
      </li>
      <li>
        <Link to={team.download} target="_blank">
          {team.downloadText}
          <img src={team.downloadImage} alt="download" />
        </Link>
      </li>
      <li>
        <Link to={personal.link} target="_blank">
          {personal.linkText}
          <img src={personal.linkImage} alt="link" />
        </Link>
      </li>
    </ul>
  );
}
