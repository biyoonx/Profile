import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Divider from '../Divider/Divider';

export default function RootLayout() {
  return (
    <>
      <Header />
			<Divider />
      <main>
        <Outlet />
      </main>
			<Divider />
    </>
  );
}
