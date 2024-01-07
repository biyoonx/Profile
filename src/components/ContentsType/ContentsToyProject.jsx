import React from 'react';

import ContentsToyProjectDesc from './ContentsToyProjectDesc';
import ContentsPortfolioLink from './ContentsPortfolioLink';
import ContentsProjectResult from './ContentsProjectResult';

export default function ContentsToyProject({ contents, linkInfo }) {
  return (
    <div className="toy_project">
      <ContentsToyProjectDesc content={contents.content} />
      <ContentsPortfolioLink linkInfo={linkInfo} links={contents.links} />
      {contents.result?.length > 0 && (
        <ContentsProjectResult contents={contents.result} />
      )}
    </div>
  );
}
