import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import './SiteMapModal.css';

export default function SiteMapModal({ isOpen, closeModal }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.style.cssText = `
    position: fixed; 
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;
		`;

      return () => {
        const scrollY = document.body.style.top;
        document.body.style.cssText = '';
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      };
    }
  }, [isOpen]);

  const appSiteMapModalStyles = {
    overlay: {
      backgroundColor: 'rgba(127, 127, 127, 0.58)',
      width: '100%',
      height: '100vh',
      zIndex: '1000',
      top: '0',
      left: '0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      width: 'fit-content',
      inset: 'unset',
      padding: '0',
      border: 'none',
      borderRadius: '1rem',
      backgroundColor: '#fff',
      position: 'relative',
    },
  };

  const siteMapTitle = '프로필 목록보기';
  const siteMapList = [
    { page: '프로필🔖', link: 'cv' },
    { page: '자기소개📋', link: 'cover_letter' },
    { page: '포트폴리오🔰', link: 'project' },
    { page: '개인 토이프로젝트', link: 'personal_portfolio' },
  ];

  return (
    <Modal isOpen={isOpen} style={appSiteMapModalStyles}>
      <div className="sitemap_title">
        <h3>{siteMapTitle}</h3>
        <span onClick={closeModal}>x</span>
      </div>
      <hr className="sitemap_divider" />
      <div className="sitemap_list">
        <ul>
          {siteMapList.map((item) => (
            <li
              onClick={() => {
                navigate(item.link);
                closeModal();
                window.scrollTo(0, 0);
              }}
            >
              {item.page}
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
}
