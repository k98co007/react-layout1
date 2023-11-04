import React from 'react';
import { useMenu } from '../../MenuContext'; // import the hook
import CardsContent from '../Cards/CardsContent'; // Assume this is a component for Cards content
// Import other content components as needed

const ContentArea: React.FC = () => {
  const { selectedMenu } = useMenu(); // use the context hook to get the current selected menu

  // Determine what to render based on the selected menu
  const renderContent = () => {
    switch (selectedMenu) {
      case 'home':
        return <div className='home'>Home Content</div>;
      case 'cards':
        return <CardsContent />;
      case 'news':
        return <div className='news'>News Content</div>;
      case 'settings':
        return <div className='settings'>Settings Content</div>;
      case 'account':
        return <div className='account'>Account Content</div>;
      // other cases...
      default:
        return <div>Default Content</div>;
    }
  };

  return <main className='content-container'>{renderContent()}</main>;
};

export default ContentArea;
