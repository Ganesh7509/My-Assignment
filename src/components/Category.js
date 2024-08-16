import React from 'react';
import Widget from './Widget';
import './Category.css';

const Category = ({ category, onRemoveWidget, onShowForm }) => {
  return (
    <div className="category">
      <h2>{category.name}</h2>
      <div className="widgets">
        {category.widgets.map(widget => (
          <Widget
            key={widget.id}
            widget={widget}
            onRemove={() => onRemoveWidget(category.id, widget.id)}
          />
        ))}
        <div className="add-widget-container">
          <button className="add-widget-button" onClick={() => onShowForm(category.id)}> Add Widget</button>
        </div>
      </div>
    </div>
  );
};

export default Category;
