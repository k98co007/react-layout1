import React, { useState } from 'react';

// This component assumes you have an EditField component that you pass the current value to, 
// along with a onSave callback that takes the new value to update the card.

interface Props {
  onClose: () => void;
}

const EditName: React.FC<Props> = ({ onClose}) => {

  const handleClose = () => {
        
    onClose();
  };

  return (
    <div className='menuName'>
      <div onClick={() => handleClose()}>&lt; back</div>
      <br/>
      <div>This is EditName.tsx</div>
    </div>
  );
};

export default EditName;
