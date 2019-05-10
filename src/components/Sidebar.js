import React from 'react';
import SiteContent from './SiteContent';
import Form from './Form';
import CustomerSupport from './CustomerSupport';
const Sidebar = () => {
  return (
    <div className="ui bottom" style={{ marginTop: '10px' }}>
      <div className="ui visible inverted left vertical sidebar menu">
        <a className="active item">
          <i className="home icon"></i>
          Home
      </a>
        <a className="item">
          <i className="block layout icon"></i>
          Topics
    </a>
        <a className="item">
          <i className="smile icon"></i>
          Friends
    </a>
        <a className="item">
          <i className="calendar icon"></i>
          History
    </a>
      </div>
      <div className="pusher">
        <SiteContent />
       
      </div>
      <CustomerSupport />
    </div>
  );
}
export default Sidebar;