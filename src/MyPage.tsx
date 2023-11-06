import React from 'react';
import { useNavigate } from 'react-router-dom';

import { MenuProvider } from './MenuContext'; // import the provider
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import ContentArea from './components/Layout/ContentArea';

const MyPage: React.FC = () => {

  return (
    <MenuProvider> {/* Wrap your components with the provider */}
      <div className="app-container">
        <Header />
        <div className="content-body">
          <Sidebar />
          <ContentArea />
        </div>
      </div>
    </MenuProvider>
  );
}

export default MyPage;