import React, { useState, useEffect } from 'react';
import { useMenu, Card } from '../../MenuContext';

const CardDetails: React.FC = () => {
  const { cards, selectedCardId, updateCard } = useMenu();
  const [editableCard, setEditableCard] = useState<Card | null>(null);

  useEffect(() => {
    // When selectedCardId changes, find the card and set it for editing
    const selectedCard = cards.find(card => card.id === selectedCardId);
    setEditableCard(selectedCard || null);
  }, [selectedCardId, cards]);

  const handleFieldChange = (field: keyof Card, value: string) => {
    if (editableCard) {
      // Update the local editable card state
      setEditableCard({ ...editableCard, [field]: value });
    }
  };

  const saveChanges = () => {
    if (editableCard) {
      // Call the context function to update the global state
      updateCard(editableCard);
    }
  };

  if (!editableCard) return <div>Select a card to edit</div>;

  return (
    <div>
      <input
        type="text"
        value={editableCard.title}
        onChange={(e) => handleFieldChange('title', e.target.value)}
      />
      <button onClick={saveChanges}>Save</button>
      {/* Repeat for other fields */}
    </div>
  );
};

export default CardDetails;
