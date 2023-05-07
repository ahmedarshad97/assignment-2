import React, { useState } from 'react';

const tabs = [
  { label: 'All', content: 'Content for tab 1' },
  { label: 'Flat', content: 'Content for tab 2' },
  { label: 'Teracced House', content: 'Content for tab 3' },
  { label: 'Semi-detached', content: 'Content for tab 3' },

];

function PropertyTabs({activeTab, handleTabClick}) {

  return (
    <div className='tabs'>
    <p className='title'>Property Types</p>
    <div className='property-tabs'>
      <ul>
        {tabs.map((tab, index) => (
          <li key={index} className={activeTab === tab.label ? 'active' : ''} onClick={() => handleTabClick(tab)}>
            {tab.label}
          </li>
        ))}
      </ul>
      <div>
      </div>
    </div>
    </div>
  );
}

export default PropertyTabs;
