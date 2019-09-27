import React from 'react';
import './Headline.css';

class Headline extends React.Component {
  render() {
    return (
        <div className="Headline-header">
           <div className="header-app-info">My Application Name</div>
           <div className="header-user-info">User Information</div>
        </div>
    );
  }
}


export default Headline;
