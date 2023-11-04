import React from 'react';
import { MenuProvider } from './MenuContext'; // import the provider
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import ContentArea from './components/Layout/ContentArea';
import './App.css';

function App() {
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

export default App;
