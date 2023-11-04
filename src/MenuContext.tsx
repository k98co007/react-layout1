// ... previous imports
import React, { createContext, useState, useContext, useCallback, ReactNode } from 'react';

interface MenuProviderProps {
  children: ReactNode; // This type is from React and it represents any renderable React content
}

export interface Card {
  id: number;
  title: string;
  name: string;
  description: string;
  tags: string[];
}

// Extend the MenuContextState interface to include cards and card operations
interface MenuContextState {
  selectedMenu: string;
  cards: Card[];
  selectedCardId: number | null;
  selectMenu: (menuName: string) => void;
  updateCard: (updatedCard: Card) => void;
  selectCard: (cardId: number) => void;
}

// Add initial dummy data for cards
const initialCards: Card[] = [
  // ... your initial dummy cards
  { id: 1, title: 'Card 1', name: 'Name 1', description: 'Desc 1', tags: ['tag1', 'tag2', 'tag3'] },
  { id: 2, title: 'Card 2', name: 'Name 2', description: 'Desc 2', tags: ['tag1', 'tag2', 'tag3'] },
  { id: 3, title: 'Card 3', name: 'Name 3', description: 'Desc 3', tags: ['tag1', 'tag2', 'tag3'] },
];

// Update the default value of the context
const MenuContext = createContext<MenuContextState>({
  selectedMenu: 'home',
  cards: initialCards,
  selectedCardId: null,
  selectMenu: () => {},
  updateCard: () => {},
  selectCard: () => {},
});

export const useMenu = () => useContext(MenuContext);

export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
  const [selectedMenu, setSelectedMenu] = useState('home');

  const selectMenu = (menuName: string) => {
    setSelectedMenu(menuName);
  };

  const [cards, setCards] = useState<Card[]>(initialCards);
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

  const selectCard = (cardId: number) => {
    setSelectedCardId(cardId);
  };

  // Add a function to update a card
  const updateCard = useCallback((updatedCard: Card) => {
    setCards(currentCards => {
      return currentCards.map(card => (card.id === updatedCard.id ? updatedCard : card));
    });
  }, []);

  return (
    <MenuContext.Provider value={{ selectedMenu, selectMenu, cards, selectedCardId, selectCard, updateCard }}>
      {children}
    </MenuContext.Provider>
  );
};

// ... export statements
