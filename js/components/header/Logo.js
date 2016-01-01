import React, { Component } from 'react';
import logoSrc from '../../../img/petar-logo.jpg';

class Logo extends Component {
  render() {
    return (
      <div>
            <img className="logo" src={logoSrc} />
        </div>
      );
  }
}

// Wrap the component to inject dispatch and state into it
export default Logo;
