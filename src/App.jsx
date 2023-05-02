import CustomButton from "./components/CustomButton";
import React, { useState } from 'react';

import "./App.css";

function App() {

  const [activeTab, setActiveTab] = useState('Home');

  const handleClick = (label) => {
    setActiveTab(label);
  }

  const isActive = (label) => {
    return label === activeTab ? 'active' : '';
  }

  return (
    <nav>
      <ul>
        <li className={isActive('Home')} onClick={() => handleClick('Home')}>Home</li>
        <li className={isActive('Groceries')} onClick={() => handleClick('Groceries')}>Groceries</li>
        <li className={isActive('About Us')} onClick={() => handleClick('About Us')}>About Us</li>
        <li className={isActive('Contact Us')} onClick={() => handleClick('Contact Us')}>Contact Us</li>
      </ul>
    </nav>
  );
}
export default App;
