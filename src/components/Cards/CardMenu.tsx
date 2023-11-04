import React, { useState } from 'react';

interface CardMenuProps {
  onSelect: (menu: string) => void;
}


const CardMenu: React.FC<CardMenuProps> = ({onSelect}) => {
    const [seletecMenu, setSelectedMenu] = useState('title');

    const handleMenu = (menu: string) => {
        
        onSelect(menu);
      };

  return (
    
      <nav>
        <ul>
          This is CardMenu.tsx
          <br/>
          <br/>
          select menu below
          <br/>
          <br/>
          <li onClick={() => handleMenu('title')}>title</li>
          <li onClick={() => handleMenu('name')}>name</li>
          <li onClick={() => handleMenu('description')}>description</li>
          <li onClick={() => handleMenu('tag')}>tag</li>
        </ul>
      </nav>
    
  );
};

export default CardMenu;
