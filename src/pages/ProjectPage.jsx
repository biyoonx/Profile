import React from 'react';

import { ruralCommunitiesActivityProject } from '../contents/ProjectPortfolio/project-portfolio';
import ProjectTitle from '../components/Project/ProjectTitle';
import HomeLink from '../components/HomeLink/HomeLink';
import ContentsBox from '../components/ContentsBox/ContentsBox';
import ContentsIntroduction from '../components/ContentsType/ContentsIntroduction';
import ContentsSkills from '../components/ContentsType/ContentsSkills';
import ProjectFunc from '../components/Project/ProjectFunc';
import ProjectModeling from '../components/Project/ProjectModeling';
import ProjectTroubleShooting from '../components/Project/ProjectTroubleShooting';
import ProjectDesc from '../components/Project/ProjectDesc';

export default function ProjectPage() {
  const {
    mainTitle,
    home,
    goal,
    skills,
    role,
    desc,
    modeling,
    troubleShooting,
  } = ruralCommunitiesActivityProject;

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
    >
      <ProjectTitle title={mainTitle} />
      <div style={{ width: '100%' }}>
        <HomeLink homeInfo={home} />
      </div>
      <ContentsBox
        title={goal.title}
        contents={() => <ContentsIntroduction contents={goal.contents} />}
      />
      <ContentsBox
        title={skills.title}
        contents={() => (
          <ContentsSkills
            contents={skills.contents}
            style={{ fontSize: '1.256rem' }}
          />
        )}
      />
      <ContentsBox
        title={role.title}
        contents={() => (
          <>
            <ContentsIntroduction contents={role.contents} />
            <ProjectFunc contents={role.subContents} />
          </>
        )}
      />
      <ContentsBox
        title={desc.title}
        contents={() => <ProjectDesc contents={desc.pdf} />}
      />
      <ContentsBox
        title={modeling.title}
        contents={() => <ProjectModeling contents={modeling.contents} />}
      />
      {false && <ContentsBox
        title={troubleShooting.title}
        contents={() => (
          <ProjectTroubleShooting contents={troubleShooting.contents} />
        )}
      />}
    </div>
  );
}
