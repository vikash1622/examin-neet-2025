import React from 'react';

const ActionButtons = () => {
  const handlePrint = () => {
    window.print(); // this opens the browser print dialog
  };

  return (
    <div className="action-buttons">
      <button className="print" onClick={handlePrint}>Print</button>
      <button className="close">Close</button>
    </div>
  );
};

export default ActionButtons;
