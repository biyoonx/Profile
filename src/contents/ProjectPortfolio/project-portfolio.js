import link from '../backlinks.png';
import pdf from '../pdf-file.png';
import blog from '../blog.png';
import summary from './architecture.svg';
import detail from './architecture_detail.svg';
import project from './project.pdf';
import projectFunction from './project_function.pdf';

export const ruralCommunitiesActivityProject = {
  home: {
    text: '>> 프로필로 돌아가기',
    link: '/cv',
  },
  mainTitle: '농어촌 체험 서비스 중개 플랫폼 : 프로젝트 농촌빛길',
  goal: {
    title: '개발 목표',
    contents: [
      '농어촌 체험 서비스를 제공하거나 이용할 수 있는 서비스 중개 플랫폼 개발한다.',
      '서비스 제공자는 서비스를 등록하여 게시하거나 이벤트를 등록할 수 있고 서비스 이용자는 서비스를 예약하거나 이벤트를 참여할 수 있는 사이트를 개발한다.',
      '비회원을 제외한 사이트 이용자는 마이페이지에서 사이트 이용내역을 확인할 수 있으며 관리자 페이지는 사이트를 분리하되 서비스를 전반적으로 관리할 수 있도록 한다.',
    ],
  },
  skills: {
    title: '사용 기술 및 개발환경',
    contents: [
      '운영체제 Windows10, 11',
      '사용언어 Java, JavaScript, HTML, CSS',
      'Framework/Library Spring, React',
      'DB Oracle 11g(+MySQL 8.33)',
      'Tool Eclipse, IntelliJ, VS Code, SQL plus/SQL developers/DBeaver(+Workbench)',
      'WAS Apache Tomcat 9.0.73',
      'Collaboration Git/GitHub',
    ],
  },
  role: {
    title: '담당 역할',
    contents: [
      '총괄 및 관리(팀장)🔰',
      '설정 관리 및 작업 내용 병합',
      '데이터베이스 통합 및 관리',
      '공통 기능 개발(메인 페이지, 좋아요/찜하기, 접속 통계, 게시판/회원 관리, 신고하기, 조회수 관리, 이미지 업로더, 이미지 리소스 처리, 페이징 처리 등 공통 서비스)',
      '커뮤니티 카테고리(이벤트, 소통공간, 마을소식)',
      '서비스 페이지(관리자 페이지 제외)의 UI 디자인 및 구현',
      '관리자 페이지의 메뉴바 및 상단바와 우측 바 구현',
      '로그인 및 개인정보 및 사업자정보 관련 기능 개발 중',
    ],
    subContents: {
      title: '전체 구현기능',
      architecture: [
        { desc: 'architecture_summary', image: summary },
        { desc: 'architecture_detail', image: detail },
      ],
      more: {
        button: ['>> 전체 구현기능 펼쳐보기', '<< 전체 구현기능 접기'],
        contents: [
          {
            content: '①헤더 및 네비게이션 바(날씨 API 제외하고 담당)',
            desc: [
              '로그인 및 사이트맵 모달창',
              '각 페이지에 접근할 수 있는 메인메뉴바 및 토글메뉴바 구현',
              '(담당X)공공데이터의 날씨 API로 오늘 서울 날씨 및 기온 띄우기',
            ],
          },
          {
            content: '②메인 페이지(담당)',
            desc: [
              '추천 체험, 추천 마을, 전체 체험, 이벤트, 공지사항 등 전반적인 최신 컨텐츠를 DB에서 가져와서 보여줌',
              '이벤트는 다른 내용처럼 내용을 단순 나열하는 패턴을 반복하기보다 자동 슬라이드를 활용하여 이벤트 포스터를 번갈아가며 보여줌',
            ],
          },
          {
            content: '③추천 체험/마을(화면 구현 및 DB 관리만 담당)',
            desc: [
              '(담당X)DB에서 목록 조회 또는 상세 조회를 위한 데이터 추출해서 클라이언트 요청에 따라 반환(키워드별, 지역별로 최신순/좋아요순/조회순으로 나열하여 반환), 마을 제보하기(등록) 기능 구현',
              '(담당O)키워드 선택, 정렬 방식 선택에 따라서 해당하는 데이터만 화면에 띄우기, 선택한 시도 및 시군구에 따라서 지도의 행정지역이 이름과 함께 표시되도록 하기, 선택한 지역에 해당하는 데이터 띄우기',
            ],
          },
          {
            content: '④전체 체험(화면 구현 및 DB 관리만 담당)',
            desc: [
              '(담당X)테마별, 지역별 체험 서비스 조회, 체험 서비스 등록/수정/삭제, 체험 서비스 예약, 공공데이터API로 농촌관광등급 정보 요청 및 조회',
              '(담당O)화면 설계 및 구현, 등록/수정/삭제/예약 등에 따른 모달창 구현',
            ],
          },
          {
            content: '⑤커뮤니티(담당)',
            desc: [
              '이벤트 : 이벤트 등록, 수정, 응모, 이벤트 목록 조회 및 상세 조회',
              '커뮤니티(소통공간/마을소식) : 게시글 목록 조회 및 상세 조회, 게시글 등록/수정/삭제, 게시글 신고하기',
            ],
          },
          {
            content: '⑥고객센터(화면 구현 및 DB 관리만 담당)',
            desc: [
              '(담당X)공지사항, FAQ 목록 조회 및 상세 조회 구현, 문의글 목록 및 상세조회, 문의글 등록/수정/삭제',
              '(담당O)화면 설계 및 구현, 등록/수정/삭제 등에 따른 모달창 구현',
            ],
          },
          {
            content: '⑦마이페이지(화면 구현 및 DB 관리만 담당)',
            desc: [
              '(담당X)서비스 이용자(멤버) : 개인정보 수정, 예약 및 참여한 체험 관리, 신청 및 응모한 이벤트 관리, 리뷰 조회 및 작성/수정/삭제, 내가 쓴 커뮤니티(소통공간) 글 조회',
              '(담당X)서비스 제공자(셀러) : 서비스 이용통계, 사업자정보 수정, 등록한 체험 서비스 관리, 게재 요청한 이벤트 관리, 내가 쓴 커뮤니티(마을소식) 글 조회',
              '(담당O)화면 설계 및 구현, 등록/수정/삭제 등에 따른 모달창 구현',
            ],
          },
          {
            content: '⑧관리자페이지(화면 구현 일부만 담당)',
            desc: [
              '(담당X)회원 관리(운영자, 서비스 이용자, 서비스 제공자, 가입 승인 처리 등), 전체 게시판 관리(고객센터, 추천, 전체, 커뮤니티, 이벤트 등), 예약 관리(서비스 이용자/서비스 제공자), 통계 관리(예약/접속), 서비스 관리(문의/신고)',
              '(담당O)메인 메뉴바, 상단바, 우측 상태바 구현(RootLayout)',
            ],
          },
        ],
      },
    },
  },
  desc: {
    title: '프로젝트 소개 및 설명',
    pdf: { desc: project, func: projectFunction },
  },
  modeling: {
    title: '프로젝트 소개 및 모델링 자료',
    contents: {
      desc: '❓궁금한 부분이 있다면 클릭✨',
      link: [
        {
          text: '프로젝트 농촌빛길 소개자료',
          link: 'https://drive.google.com/file/d/1YipgYJCHQW77UuNELcIwWRrFC_hedGG7/view?usp=sharing',
          image: pdf,
          desc: 'project_pdf',
        },
        {
          text: '프로젝트 전체 코드 및 시연영상',
          link: 'https://github.com/JAVAJOProject/RuralCommunitiesActivity',
          image: link,
          desc: 'project_code',
        },
        {
          text: 'DB 모델링(ERDCloud)',
          link: 'https://www.erdcloud.com/d/pTwBuwDLFnuuFYLy5',
          image: link,
          desc: 'project_db',
        },
        {
          text: 'UI 도안(Figma)',
          link: 'https://www.figma.com/file/S7JfNevGagugPj4odQQ9SK/Final-Project-%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B0%80%EC%95%88?type=design&node-id=0%3A1&mode=design&t=bne6jsU5NDRnILzN-1',
          image: link,
          desc: 'project_ui',
        },
      ],
    },
  },
  troubleShooting: {
    title: '트러블 슈팅 기록',
    contents: [
      {
        text: '이미지 파일첨부',
        link: 'https://blog.naver.com/biyoonx/223309631840',
        desc: 'image_uploader',
        image: blog,
      },
      // {
      //   text: '페이지네이션',
      //   link: '',
      //   desc: 'pagination',
      //   image: blog,
      // },
      // {
      //   text: '이미지 리소스 반환',
      //   link: '',
      //   desc: 'image_resource_response',
      //   image: blog,
      // },
    ],
  },
};
