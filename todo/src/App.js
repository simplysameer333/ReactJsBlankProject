import React, { Component } from 'react';
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import CustomNavbar from './components/shared/CustomNavbar'
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <CustomNavbar/>        
        <Footer/>
      </div>
    );
  }
}

export default App;
