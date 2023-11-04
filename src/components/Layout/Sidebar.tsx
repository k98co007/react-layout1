import React from 'react';
import { useMenu } from '../../MenuContext'; // import the hook

const Sidebar: React.FC = () => {
  const { selectMenu } = useMenu(); // use the context hook to get the selectMenu function

  return (
    <aside className='sidebar'>
      <nav>
        <ul>
          {/* When a list item is clicked, update the selected menu */}
          <li onClick={() => selectMenu('home')}>Home</li>
          <li onClick={() => selectMenu('cards')}>Cards</li>
          <li onClick={() => selectMenu('news')}>News</li>
          <li onClick={() => selectMenu('settings')}>Settings</li>
          <li onClick={() => selectMenu('account')}>Account</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
