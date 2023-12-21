import React from 'react';

import { profile } from '../contents/Main/main-profile';
import ContentsBox from '../components/ContentsBox/ContentsBox';
import ContentsIntroduction from '../components/ContentsType/ContentsIntroduction';
import ContentsEducation from '../components/ContentsType/ContentsEducation';
import ContentsCertification from '../components/ContentsType/ContentsCertification';
import ContentsExperience from '../components/ContentsType/ContentsExperience';
import ContentsPortfolio from '../components/ContentsType/ContentsPortfolio';
import ContentsSkills from '../components/ContentsType/ContentsSkills';
import ContentsChannel from '../components/ContentsType/ContentsChannel';
import ContentsContact from '../components/ContentsType/ContentsContact';

export default function CVPage() {
  const {
    introduction,
    education,
    certifications,
    experience,
    portfolio,
    skills,
    channel,
    contact,
  } = profile;

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
    >
      <ContentsBox
        title={introduction.title}
        contents={() => (
          <ContentsIntroduction
            contents={introduction.contents}
            more={introduction.more}
          />
        )}
      />
      <ContentsBox
        title={education.title}
        contents={() => <ContentsEducation contents={education.contents} />}
      />
      <ContentsBox
        title={certifications.title}
        contents={() => (
          <ContentsCertification contents={certifications.contents} />
        )}
      />
      <ContentsBox
        title={experience.title}
        contents={() => <ContentsExperience contents={experience.contents} />}
      />
      <ContentsBox
        title={portfolio.title}
        contents={() => <ContentsPortfolio contents={portfolio.contents} />}
      />
      <ContentsBox
        title={skills.title}
        contents={() => <ContentsSkills contents={skills.contents} />}
      />
      <ContentsBox
        title={skills.title}
        contents={() => <ContentsChannel contents={channel.contents} />}
      />
      <ContentsBox
        title={contact.title}
        contents={() => <ContentsContact contents={contact.contents} />}
      />
    </div>
  );
}
