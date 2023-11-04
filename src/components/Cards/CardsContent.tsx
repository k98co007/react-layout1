import React, {useState, useRef, useEffect} from 'react';
import CardList from './CardList'; // This should be your component containing the list of cards
import CardDetails from './CardDetail'; // This should be your component for card details
import CardMenu from './CardMenu';
import EditMode from './EditMode';
import EditTitle from './EditTitle';
import EditName from './EditName';
import EditDescription from './EditDescription';
import EditTag from './EditTag';


const CardsContent: React.FC = () => {
  const [leftContentWidth, setleftContentWidth] = useState<number>(500);
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const [showCardMenu, setShowCardMenu] = useState<boolean>(true);
  const [selectedCardMenu, setSelectedCardMenu] = useState<string>('');

  const startResizing = (mouseDownEvent: React.MouseEvent) => {
    setIsResizing(true);
    mouseDownEvent.preventDefault();
  };

  const stopResizing = () => {
    setIsResizing(false);
  };

  const resize = (mouseMoveEvent: MouseEvent) => {
    if (isResizing && leftContentRef.current) {
      const newWidth = mouseMoveEvent.clientX - leftContentRef.current.getBoundingClientRect().left;
      if (newWidth > 100 && newWidth < 900) { // You can set min and max width limits here
        setleftContentWidth(newWidth);
      }
    }
  };

  useEffect(() => {
    if (isResizing) {
      window.addEventListener("mousemove", resize);
      window.addEventListener("mouseup", stopResizing);
    }

    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [isResizing, resize]);

  const menuSelected =(menu: string) => {
    setShowCardMenu(false);
    setSelectedCardMenu(menu);
  }
  const editDone =() => {
    setShowCardMenu(true);
    setSelectedCardMenu('');
  }

  return (
    <div  className='content-container'>
      <aside  className="leftContent" ref={leftContentRef} style={{ width: `${leftContentWidth}px` }}>
      <CardList />
        <div className="resizer" onMouseDown={startResizing}></div>
      </aside >

      <main className='rightContent'>
        {selectedCardMenu === '' && <CardMenu onSelect={menuSelected}/>}
        {selectedCardMenu === 'title' && <EditTitle onClose={editDone}/>}
        {selectedCardMenu === 'name' && <EditName onClose={editDone}/>}
        {selectedCardMenu === 'description' && <EditDescription onClose={editDone}/>}
        {selectedCardMenu === 'tag' && <EditTag onClose={editDone}/>}
      </main>
    </div>
  );
};

export default CardsContent;
