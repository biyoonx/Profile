import logo from './logo.svg';
import link from '../backlinks.png';
import pdf from '../pdf-file.png';
import github from '../github.svg';
import naverblog from './naver-blog.svg';
import code from '../programming.png';
import blog from '../blog.png';

export const profile = {
  introduction: {
    title: '소개🔖',
    contents: [
      {
        hasTag:
          '맡은 일을 <u>책임감 있게 성실히 하는 것</u>을 넘어 나의 역할과 역량에 대해 고민하고 공부하는 <b>적극적이고 목표지향적인 사람</b>입니다',
      },
      '아직 부족하지만 어제보다 나은 오늘, 오늘보다 나은 내일을 목표로 꾸준히, 즐겁게 성장하고자 하고 있습니다.',
      '문제를 만났을 때 정의하고 공부하여 끈덕지게 해결해나가는 과정을 즐기고 있습니다.',
    ],
    more: { text: '>> 자기소개 더 보러가기', link: '/cover_letter' },
  },
  education: {
    title: '학력 및 교육📚',
    contents: [
      '2024.02 경희대학교 사회학과·지리학과 졸업예정(학점 3.94/4.5)',
      '2023.10 KH교육원 공공데이터 융합 자바 개발자 양성과정 수료(100%)',
    ],
  },
  certifications: {
    title: '자격증📑',
    contents: [
      '2023.09 정보처리기사 필기',
      '2023.12 SQL 개발자',
      '2018.11 사회조사분석사 2급',
      '2019.10 컴퓨터활용능력 1급',
    ],
  },
  experience: {
    title: '경험🏃🏻‍♀️',
    contents: [
      `2019.02~ 2023.03(4년 2개월) Subway 망우점 Master
매장 오픈 준비, 매장 관리 및 REV 평가 대비, 서류 작성, 발주 및 물품 관리, 물류 받기, 샌드위치 제조/판매`,
      `2017.03 ~ 2019.02(2년) 동대문구가족센터 근로장학
사무 보조, 프로그램 기획 및 진행, 프로그램 보조, 홍보물 제작 등`,
      `2016.12 ~ 2017.02(3개월) 드림스폰 근로장학
마케팅 기획, DB 수집 및 정리`,
    ],
  },
  portfolio: {
    title: 'Portfolio🔰',
    contents: {
      team: {
        mainImage: logo,
        linkText: '▲팀프로젝트 보러가기✨',
        link: '/project',
        linkImage: link,
        downloadText: '팀프로젝트 소개자료 다운로드',
        download:
          'https://drive.google.com/file/d/1YipgYJCHQW77UuNELcIwWRrFC_hedGG7/view?usp=sharing',
        downloadImage: pdf,
      },
      personal: {
        linkText: '개인 토이프로젝트 코드 및 기록',
        link: 'https://github.com/biyoonx/Practical_code_I_crafted',
        linkImage: link,
      },
    },
  },
  skills: {
    title: 'Skills📝',
    contents: [
      'Front-End JavaScript, HTML, CSS, Ajax',
      'Back-End Java, JSP, Servlet',
      'Framework/Library Spring, React, MyBatis',
      'DB Oracle, MySQL',
      'Tool Eclipse, VS Code, IntelliJ',
      'Collaboration Git/GitHub',
    ],
  },
  channel: {
    title: 'Channel🔗',
    contents: [
      {
        mainImage: github,
        desc: 'github',
        subImage: code,
        text: '코드가 궁금하다면 클릭',
        link: 'https://github.com/biyoonx',
      },
      {
        mainImage: naverblog,
        desc: 'naver_blog',
        subImage: blog,
        text: '기술 블로그가 궁금하다면 클릭',
        link: 'https://blog.naver.com/biyoonx',
      },
    ],
  },
  contact: {
    title: 'Contact📞',
    contents: [{ type: 'email', content: '📧 ok2geoya@gmail.com' }],
  },
};
