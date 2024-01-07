import React from 'react';
import { Link } from 'react-router-dom';
import './ContentsPortfolioLink.css';

export default function ContentsPortfolioLink({ linkInfo, links }) {
  return (
    <div className="portfolio_link">
      <ul className="portfolio_link_list">
        {linkInfo.map((item) => (
          <li key={item.index}>
            <Link to={links[item.index]} target="_blank">
              <img src={item.image} alt={item.index} />
              <p>{item.desc}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
