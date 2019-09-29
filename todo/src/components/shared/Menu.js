import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

export const Menu = () => (    
  <menu className="menu-custom">
    <Link to="/"><div className="menu-item"><span className="menu-span">Home</span></div></Link>
    <Link to="/topics"><div className="menu-item"><span className="menu-span"></span>Topics</div></Link>
    <Link to="/about"><div className="menu-item"><span className="menu-span"></span>About</div></Link>
  </menu>
)