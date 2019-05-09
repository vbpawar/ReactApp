import React from 'react';

const Navbar = () => {
    return (
        <div className="ui inverted segment">
        <div className="ui  pointing menu">
        <a className="active item">
          Home
        </a>
        <a className="item">
          Messages
        </a>
        <a className="item">
          Friends
        </a>
        <div className="right menu">
          <div className="item">
            <div className="ui icon input">
              <input type="text" placeholder="Search..." />
              <i className="search link icon"></i>
            </div>
          </div>
          <a className="ui item">
            Logout
          </a>
        </div>
      </div>
      </div>
    );
}
export default Navbar;