import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/common/Navbar.jsx';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-16">
        <Outlet /> {/* This renders the child routes */}
      </main>
    </div>
  );
};

export default Layout;