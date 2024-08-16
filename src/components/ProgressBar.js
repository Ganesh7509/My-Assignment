import React from 'react';
import './ProgressBar.css';

const ProgressBar = () => {
  return (
    <div className="progress-bar-container">
      <h3>Registry Scan</h3>
      <div className="progress-bar">
        <div className="progress-segment critical" style={{ width: '40%' }}>
        </div>
        <div className="progress-segment high" style={{ width: '20%' }}>
        </div>
        <div className="progress-segment medium" style={{ width: '35%' }}>
        </div>
        <div className="progress-segment low" style={{ width: '5%' }}>
        </div>
      </div>

    </div>
  );
};

export default ProgressBar;
