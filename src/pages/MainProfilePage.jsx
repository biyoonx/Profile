import React from 'react';

import { profile } from '../contents/Main/main-profile';
import ContentsBox from '../components/ContentsBox/ContentsBox';
import ContentsIntroduction from '../components/ContentsType/ContentsIntroduction';

export default function MainProfilePage() {
  const {
    introduction: { title, contents, more },
  } = profile;
  const intro = () => <ContentsIntroduction contents={contents} more={more} />;

  return (
    <div>
      <ContentsBox title={title} contents={intro} />
    </div>
  );
}
