import React, { useRef, useState, useEffect } from 'react';

import { personalProject } from '../contents/PersonalPortfolio/personal-portfolio';
import ProjectTitle from '../components/Project/ProjectTitle';
import TableOfContents from '../components/TableOfContents/TableOfContents';
import HomeLink from '../components/HomeLink/HomeLink';
import ContentsBox from '../components/ContentsBox/ContentsBox';
import ContentsToyProject from '../components/ContentsType/ContentsToyProject';

export default function PersonalPortfolioPage() {
  const { home, mainTitle, tableOfContents, linkInfo, element } =
    personalProject;

  const [offset, setOffset] = useState({});
  const elemRefs = useRef([]);

  useEffect(() => {
    for (let i = 0; i < element.length; i++) {
      if (elemRefs?.current[i]) {
        setOffset((prev) => ({
          ...prev,
          [element[i].index]: +elemRefs?.current[i]?.offsetTop,
        }));
      }
    }
  }, [element, elemRefs]);

  const elem = (item) => (
    <ContentsToyProject contents={item} linkInfo={linkInfo} />
  );

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
    >
      <ProjectTitle title={mainTitle} />
      <TableOfContents contents={tableOfContents} offset={offset} />
      <div style={{ width: '100%' }}>
        <HomeLink homeInfo={home} />
      </div>
      {element.map((item, index) => (
        <div
          key={item.subject}
          ref={(elem) => {
            elemRefs.current[index] = elem;
          }}
        >
          <ContentsBox
            title={item.subject}
            contents={() => elem(item.contents)}
          />
        </div>
      ))}
    </div>
  );
}
