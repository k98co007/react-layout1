import React from 'react';
import { useMenu } from '../../MenuContext';


const CardList: React.FC = () => {
  const { cards, selectCard, selectedCardId } = useMenu();

  console.log(cards);

  return (
    <div>
      card area
      {cards.map(card => (
        <div
          key={card.id}
          onClick={() => selectCard(card.id)}
          style={{ background: card.id === selectedCardId ? 'lightgrey' : 'white' }}
        >
        <h2>{card.title}</h2>
        <p>{card.description}</p>
        <p>{card.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CardList;
