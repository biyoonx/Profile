import React, { useRef, useState, useEffect } from 'react';

import { coverLetter } from '../contents/CoverLetter/cover-letter';
import HomeLink from '../components/HomeLink/HomeLink';
import TableOfContents from '../components/TableOfContents/TableOfContents';
import ContentsCoverLetter from '../components/ContentsType/ContentsCoverLetter';
import ContentsBox from '../components/ContentsBox/ContentsBox';

export default function CoverLetterPage() {
  const { home, tableOfContents, element } = coverLetter;

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

  const elem = (item) => <ContentsCoverLetter contents={item} />;

  return (
    <div>
      <TableOfContents contents={tableOfContents} offset={offset} />
      <HomeLink homeInfo={home} />
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
