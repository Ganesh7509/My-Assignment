import React, { useState } from 'react';
import './WidgetSidebar.css';

const WidgetSidebar = ({ categoryId, onAddWidget, onClose }) => {
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');

  const handleAddWidget = () => {
    onAddWidget(categoryId, { name: widgetName, text: widgetText });
    onClose();
  };

  return (
    <div className="widget-sidebar">
      <h3>Add New Widget</h3>
      <form onSubmit={handleAddWidget}>
      <div className="form-group">
        <label>Widget Name</label>
        <input
          type="text"
          required
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Widget Text</label>
        <input
          type="text"
          required
          value={widgetText}
          onChange={(e) => setWidgetText(e.target.value)}
        />
      </div>
      <div className="form-group">
        <button type='submit'>Add Widget</button>
        <button onClick={onClose}>Cancel</button>
      </div>
      </form>
    </div>
  );
};

export default WidgetSidebar;
