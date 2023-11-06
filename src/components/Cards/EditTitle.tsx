import React, { useState } from 'react';

// This component assumes you have an EditField component that you pass the current value to, 
// along with a onSave callback that takes the new value to update the card.

interface Props {
  onClose: () => void;
}

const EditTitle: React.FC<Props> = ({ onClose}) => {

  const handleClose = () => {
        
    onClose();
  };

  return (
    <div className='menuTitle'>
      <div onClick={() => handleClose()}>&lt; back</div>
      <br/>
      <br/>
      <div>This is EditTitle.tsx</div>
    </div>
  );
};

export default EditTitle;
