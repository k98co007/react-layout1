import React, { useState } from 'react';

// This component assumes you have an EditField component that you pass the current value to, 
// along with a onSave callback that takes the new value to update the card.

interface Props {
  onClose: () => void;
}

const EditTag: React.FC<Props> = ({ onClose}) => {

  const handleClose = () => {
        
    onClose();
  };

  return (
    <div className='menuTag'>
      <div onClick={() => handleClose()}>&lt; back</div>
      <br/>
      <div>This is EditTag.tsx</div>
    </div>
  );
};

export default EditTag;
