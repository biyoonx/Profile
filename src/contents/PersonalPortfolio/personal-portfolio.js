import github from './github.svg';
import code from '../programming.png';
import blog from '../blog.png';

export const personalProject = {
  home: {
    text: '>> 프로필로 돌아가기',
    link: '/cv',
  },
  mainTitle: '토이프로젝트 소개',
  tableOfContents: {
    title: '📓목차',
    contents: [
      {
        text: '📍자바로 구현한 학점 관리 시스템',
        index: 'GradeManagementSystem',
      },
      {
        text: '📍TCP 소켓 프로그래밍을 이용한 채팅 프로그램',
        index: 'ChatProgram',
      },
      { text: '📍바닐라 JS로 간이게시판 구현', index: 'SimpleBulletinBoard' },
      {
        text: '📍JS Validation API를 이용한 로그인 유효성 검사',
        index: 'JS Validation API',
      },
      {
        text: '📍JSP로 DB에 있는 퀴즈를 풀고 채점하는 프로그램',
        index: 'QuizTable',
      },
    ],
  },
  linksImage: { readme: github, code: code, blog: blog },
  element: [
    {
      index: 'GradeManagementSystem',
      subject: '자바로 구현한 학점 관리 시스템',
      contents: [
        {
          content: [
            '자바로 구현한 학점 관리 시스템은 책 <Do it! 자바 프로그래밍 입문>의 최종 프로젝트에서 설계만 보고 원하는대로 직접 구현해본 제 첫번째 토이프로젝트입니다. 설계 부분은 그대로 구현하기보다 임의로 추가/수정하였습니다.',
            '학점 정책을 인터페이스로 구현하고 화면구현 대신 Report 클래스로 콘솔창에 결과를 출력하였습니다. 이때 Report 클래스는 과목별, 전공별로 출력할 수 있도록 하면서 공통된 부분을 더 추상화하는 것이 더 적절하다고 생각하여 추상 클래스로 만들었습니다. 이 때 리포트의 대상이 되는 과목이나 전공에 따라 집계 내용이 달라지되 형식은 동일하게 유지되도록 마커 인터페이스와 템플릿 메서드를 활용하여 결과를 출력하도록 하였습니다.',
          ],
          links: {
            readme:
              'https://github.com/biyoonx/Practical_code_I_crafted?tab=readme-ov-file#grademanagementsystem%ED%95%99%EC%A0%90%EA%B4%80%EB%A6%AC%EC%8B%9C%EC%8A%A4%ED%85%9C',
            code: 'https://github.com/biyoonx/Practical_code_I_crafted/tree/main/GradeManagementSystem/src',
            blog: 'https://blog.naver.com/biyoonx/223117795740',
          },
        },
      ],
    },
    {
      index: 'ChatProgram',
      subject: 'TCP 소켓 프로그래밍을 이용한 채팅 프로그램',
      contents: [
        {
          content: [
            '채팅 프로그램은 책 <이것이 자바다>의 네트워크 부분 실습을 변형한 것으로 TCP 소켓 프로그래밍을 활용하여 여러 명의 접속자가 하나의 채팅방에 해당하는 한 서버에 접속하여 메시지를 주고받을 수 있도록 만든 프로그램입니다.',
            '네트워크, 스레드, 블로킹과 입출력 스트림을 활용하여야 했기 때문에 프로그램에 대한 구조적인 이해를 하기 위해 코드를 분석하고 구조화하여 이해한 후 다시 짜보고자 하였습니다. 네트워크, 스레드, 블로킹 등에 대한 이해와 실제로 어떻게 유기적으로 동작하게 할 수 있는지 이해하는 것을 주 목적으로 하였고 그러면서 로직을 분리하거나 조용히 퇴장과 같은 기능 추가도 해보고자 하였습니다.',
          ],
          links: {
            readme:
              'https://github.com/biyoonx/Practical_code_I_crafted/tree/main?tab=readme-ov-file#chatprogramtcp-%EC%86%8C%EC%BC%93-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EC%B1%84%ED%8C%85-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8',
            code: 'https://github.com/biyoonx/Practical_code_I_crafted/tree/main/ChatProgram',
            blog: 'https://blog.naver.com/biyoonx/223122712567',
          },
        },
      ],
    },
    {
      index: 'SimpleBulletinBoard',
      subject: '바닐라 JS로 간이게시판 구현',
      contents: [
        {
          content: [
            '바닐라 JS로 구현한 간이 게시판은 기본적으로 제목, 작성자, 내용, 파일첨부로 구성된 간략한 입력폼과 하단에 등록된 글들을 목록 표로 보여주는 부분으로 구성되어 있고, 특정 게시글을 클릭하면 상세 내용이 라이트박스 형태로 띄워지는 게시판입니다. DB와 연결한 것은 아니고 바닐라 JS로만 게시판 동작 구조를 만들어보고자 제작하였습니다.',
            '데이터의 영속성이 없는 형태이고 흐름을 파악하기 위한 형태이다보니 게시글에 대한 데이터를 객체에 담고 게시글 목록은 배열에 담아 관리하도록 하였습니다. 게시글은 등록과 조회, 삭제가 가능하도록 되어있습니다.',
          ],
          links: {
            readme:
              'https://github.com/biyoonx/Practical_code_I_crafted/tree/main?tab=readme-ov-file#simplebulletinboard%EA%B0%84%EC%9D%B4%EA%B2%8C%EC%8B%9C%ED%8C%90',
            code: 'https://github.com/biyoonx/Practical_code_I_crafted/tree/main/SimpleBulletinBoard',
            blog: 'https://blog.naver.com/biyoonx/223139630336',
          },
        },
      ],
    },
    {
      index: 'JS Validation API',
      subject: 'JS Validation API를 이용한 로그인 유효성 검사',
      contents: [
        {
          content: [
            '바닐라 JS로 구현한 로그인 유효성 검사 프로그램은 Web API를 적용하여 유효성을 검사하고 결과를 출력하도록 하는 미니프로젝트입니다. 아이디와 비밀번호, 비밀번호 확인, 이름과 회원가입 버튼으로 이루어진 단순한 화면으로 구성되어 있으며 JS Validation API를 활용하여 유효성 검사를 구현하는 것을 주요 목표로 만들어졌습니다.',
            '유효성 상태와, 검사 결과 메세지, 상태를 변경할 수 있는 메서드를 분리하여 만들었고 유효성 검사는 회원가입 버튼을 클릭과 관련없는 검사와 클릭 후로 나뉘어져 있습니다.',
            '기본적으로 사용자가 값을 입력했을 때 기존 아이디를 뜻하는 임의의 값과 동일한지 체크하거나 비밀번호 일치 여부를 실시간으로 확인해서 메시지를 띄우도록 동작합니다. 회원가입 버튼(폼 제출)을 클릭하면 필수 값 입력 여부, 아이디 중복 여부, 비밀번호 일치 여부를 확인하여 유효하면 제출 성공 알림을 그렇지 않다면 문제가 있는 부분의 스타일이 바뀌며(붉은 테두리) 무엇이 문제인지 웹 기본 툴팁으로 알려주도록 되어 있습니다.(기본 동작을 멈추고 alert로 동작하는 것도 만들어보고 주석처리 해두었습니다.)',
          ],
          links: {
            readme:
              'https://github.com/biyoonx/Practical_code_I_crafted/tree/main?tab=readme-ov-file#js-validation-api%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%EC%B0%BD%EC%9D%84-%EA%B5%AC%ED%98%84%ED%95%98%EC%97%AC-%EC%9E%85%EB%A0%A5-%EB%82%B4%EC%9A%A9%EC%97%90-%EB%8C%80%ED%95%9C-%EC%9C%A0%ED%9A%A8%EC%84%B1-%EA%B2%80%EC%82%AC%EB%A5%BC-%ED%95%98%EB%8A%94-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8',
            code: 'https://github.com/biyoonx/Practical_code_I_crafted/tree/main/JS%20Validation%20API',
            blog: 'https://blog.naver.com/biyoonx/223140316672',
          },
        },
      ],
    },
    {
      index: 'QuizTable',
      subject: 'JSP로 DB에 있는 퀴즈를 풀고 채점하는 프로그램',
      contents: [
        {
          content: [
            '퀴즈 맞추기 프로그램은 Spring, JSP, MyBatis, MySQL로 IntelliJ에서 만든 미니 프로그램입니다. 데이터베이스에 미리 저장된 퀴즈 내용으로 사용자의 입력을 받아 제출하면 데이터베이스에 있는 답과 비교 후 채점하여 결과를 알려주도록 되어있습니다.',
          ],
          links: {
            readme:
              'https://github.com/biyoonx/Practical_code_I_crafted/tree/main?tab=readme-ov-file#quiztable%ED%80%B4%EC%A6%88-%EB%A7%9E%EC%B6%94%EA%B8%B0-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8',
            code: 'https://github.com/biyoonx/Practical_code_I_crafted/tree/main/QuizTable',
            blog: 'https://blog.naver.com/biyoonx/223206447127',
          },
        },
      ],
    },
  ],
};
