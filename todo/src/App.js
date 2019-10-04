import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import history from './history'
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import CustomNavbar from './components/shared/CustomNavbar';
import { NavigationBar } from './components/shared/NavigationBar';
import { MainContainer } from './components/MainContainer';
import {Layout} from './components/Layout';
import SplitPane from 'react-split-pane';
import { Menu } from './components/shared/Menu'
import './App.css';

const styles = {
  background:  '#D3D3D3',
  width: '2px',
  cursor: 'col-resize',
  height: '100%',
};

class App extends Component {
  render() {
    return (
      <React.Fragment>            
          <Header/>          
          <Router history={history}>
          <NavigationBar/>  
         
          <SplitPane
            split="vertical"
            minSize={"20%"}
            defaultSize={"20%"}
            resizerStyle={styles}
            className={"split-size"}
          >
              <Menu />    
              <Layout>          
                <MainContainer />
              </Layout> 
              </SplitPane> 
           
          </Router>   
          <Footer />          
      </React.Fragment>
    );
  }
}

export default App;
