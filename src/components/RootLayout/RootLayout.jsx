import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Divider from '../Divider/Divider';
import SiteMapButton from '../SiteMap/SiteMapButton';
import SiteMapModal from '../SiteMap/SiteMapModal';

export default function RootLayout() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const siteMapButtonText = '프로필 목록보기';

  return (
    <>
      <Header />
      <SiteMapButton
        btnText={siteMapButtonText}
        btnAction={() => setIsModalOpen(true)}
      />
      <Divider />
      <main>
        <Outlet />
      </main>
      <Divider />

      <SiteMapModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />
    </>
  );
}
