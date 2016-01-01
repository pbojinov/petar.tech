import React, { Component } from 'react';
import { Link } from 'react-router';

class Navigation extends Component {
  render() {
    return (
      <ul className="navigation">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/book'>Reading List</Link></li>
        <li><Link to='/now'>Now</Link></li>
        </ul>
      );
  }
}

export default Navigation;
