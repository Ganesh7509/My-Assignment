import React, { useState } from 'react';
import Category from './Category';
import WidgetSidebar from './WidgetSidebar';
import SearchBar from './SearchBar';
import './Dashboard.css';

const Dashboard = () => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: 'CSPM Executive Dashboard',
      widgets: [
        { id: 1, name: 'Cloud Accounts', text: '', type: 'doughnut', isNew: false },
        { id: 2, name: 'Cloud Account Risk Assessment', text: '', type: 'doughnut', isNew: false },
      ],
    },
    {
      id: 2,
      name: 'CWPP Dashboard',
      widgets: [
        { id: 3, name: 'Top 5 Namespace Specific Alerts', text: 'No Graph data available!', type: 'none', isNew: false },
        { id: 4, name: 'Workload Alerts', text: 'No Graph data available!', type: 'none', isNew: false },
      ],
    },
    {
      id: 3,
      name: 'Registry Scan',
      widgets: [
        { id: 5, name: 'Image Risk Assessment', title: '1470 Total Vulnerabilities', type: 'bar', isNew: false },
        { id: 6, name: 'Image Security Issues', title: '2 Total Images', type: 'bar', isNew: false },
      ],
    },
  ]);

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const addWidget = (categoryId, widgetData) => {
    setCategories(categories.map(category => {
      if (category.id === categoryId) {
        return {
          ...category,
          widgets: [...category.widgets, {
            id: Date.now(),
            ...widgetData,
            isNew: true
          }]
        };
      }
      return category;
    }));
  };





  // Function to remove a widget from the selected category
  const removeWidget = (categoryId, widgetId) => {
    setCategories(categories.map(category => {
      if (category.id === categoryId) {
        return {
          ...category,
          widgets: category.widgets.filter(widget => widget.id !== widgetId)
        };
      }
      return category;
    }));
  };

  const showForm = (categoryId) => {
    setSelectedCategoryId(categoryId);
    setIsSidebarVisible(true);
  };

  const filteredCategories = categories.map(category => ({
    ...category,
    widgets: category.widgets.filter(widget =>
      widget.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      widget.text?.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }));
  



  return (
    <div className="dashboard">
      <>
      <div className="headerContainer">
      <div className="titleContainer">
        <h1 className="title">CNAPP Dashboard</h1>
      </div>
      <div className="controlsContainer">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <button className="addButton">Add Widget +</button>
        <button className="iconButton">
          <i className="fas fa-sync-alt"></i>
        </button>
        <button className="iconButton">
          <i className="fas fa-ellipsis-h"></i>
        </button>
        <button className="dateRangeButton">
          <i className="fas fa-clock"></i> Last 2 days
        </button>
      </div>
      </div>
      </>
      <div className="categories">
        {filteredCategories.map(category => (
          <Category
            key={category.id}
            category={category}
            onRemoveWidget={removeWidget}
            onShowForm={showForm}
          />
        ))}
      </div>
      {isSidebarVisible && (
        <WidgetSidebar
          categoryId={selectedCategoryId}
          onAddWidget={addWidget}
          onClose={() => setIsSidebarVisible(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;
