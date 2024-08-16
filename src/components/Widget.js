import React from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import './Widget.css';
import NoDataImage from "../graph.png";

const Widget = ({ widget, onRemove }) => {
  const cloudAccountsData = {
    labels: ['Connected', 'Not Connected'],
    datasets: [{
      data: [2, 2], 
      backgroundColor: ['#4A90E2', '#C6D7D7'], 
    }]
  };

  const cloudAccountsOptions = {
    plugins: {
      legend: {
        position: 'right', 
        labels: {
          boxWidth: 12,
          padding: 10,
        }
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    cutout: '70%', 
  };

  const cloudRiskAssessmentData = {
    labels: ['Failed', 'Warning', 'Not Available', 'Passed'],
    datasets: [{
      data: [1689, 681, 36, 7253],
      backgroundColor: ['#C1302D', '#FAD732', '#C6D7D7', '#18A459'],
    }]
  };

  const cloudRiskAssessmentOptions = {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          boxWidth: 12,
          padding: 15,
        }
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    cutout: '70%',
  };

  const imageRiskData = {
    labels: [''],
    datasets: [
      {
        label: 'Critical',
        data: [9],
        backgroundColor: '#C82819',
      },
      {
        label: 'High',
        data: [70],
        backgroundColor: '#6E0F0A',
      },
      {
        label: 'Medium',
        data: [20],
        backgroundColor: '#FFB300',
      },
      {
        label: 'Low',
        data: [20],
        backgroundColor: '#C6D7D7',
      },
    ],
  };

  const imageSecurityData = {
    labels: [''],
    datasets: [
      {
        label: 'Critical',
        data: [2],
        backgroundColor: '#C82819',
      },
      {
        label: 'High',
        data: [2],
        backgroundColor: '#6E0F0A',
      },
      {
        label: 'Medium',
        data: [20],
        backgroundColor: '#EB9132',
      },
      {
        label: 'Low',
        data: [10],
        backgroundColor: '#F0C341',
      },
    ],
  };

  const barOptions = {
    indexAxis: 'y',
    scales: {
      x: {
        stacked: true,
        display: false,
      },
      y: {
        stacked: true,
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <div className="widget">
      <div className='widget-name'>
        <div className={`${widget.type === 'bar' ? 'mrt-20' : ''}`}>{widget.name}</div>
        {widget.isNew && (
          <button className="remove-widget-button" onClick={onRemove}>X</button>
        )}
      </div>
      
      {/* Add the NoDataImage between the widget name and title */}
      {widget.isNew && (
        <img src={NoDataImage} alt="No Data Available" className="no-data-image" />
      )}

      <div className={`${widget.type === 'bar' ? '' : 'chart-container'}`}>
        {widget.name === 'Cloud Accounts' && (
          <div style={{ position: 'relative' }}>
            <Doughnut data={cloudAccountsData} options={cloudAccountsOptions} />
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '30%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#4A90E2',
            }}>
              {cloudAccountsData.datasets[0].data.reduce((a, b) => a + b, 0)}
              <br />
              Total
            </div>
          </div>
        )}
        {widget.name === 'Cloud Account Risk Assessment' && (
          <div style={{ position: 'relative' }}>
            <Doughnut data={cloudRiskAssessmentData} options={cloudRiskAssessmentOptions} />
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '30%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#000000',
            }}>
              {cloudRiskAssessmentData.datasets[0].data.reduce((a, b) => a + b, 0)}
              <br />
              Total
            </div>
          </div>
        )}

        {widget.type === 'none' && (
          <div className="no-data-container mt-5">
            <img src={NoDataImage} alt="No Graph data available" className="no-data-image" />
          </div>
        )}
      </div>
      <div className="chart-container-stackbar">
        {widget.name === 'Image Risk Assessment' && 
          <>
          <p className='widget-title'>{widget.title}</p> 
          <Bar data={imageRiskData} options={barOptions} />
          </>
        }
        {widget.name === 'Image Security Issues' && 
          <><p className={`${widget.type === 'bar' ? 'widget-title' : ''}`}>{widget.title}</p>
          <Bar data={imageSecurityData} options={barOptions} />
          </>
        }
      </div> 
      <p>{widget.text}</p>
    </div>
  );
};

export default Widget;
