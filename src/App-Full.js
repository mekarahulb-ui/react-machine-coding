import React, { useState } from 'react';
import './App.css';

// Import all concept components
import JSXComponents from './components/01-JSX-Components/JSXComponents';
import StateManagement from './components/02-State-useState/StateManagement';
import Effects from './components/03-Effects-useEffect/Effects';
import Refs from './components/04-Refs-useRef/Refs';
import Context from './components/05-Context-useContext/Context';
import CustomHooks from './components/06-Custom-Hooks/CustomHooks';

/**
 * Main App Component
 * 
 * Showcases all major React concepts from React.dev:
 * 1. JSX & Components
 * 2. State Management (useState)
 * 3. Effects (useEffect)
 * 4. Refs (useRef)
 * 5. Context API (useContext)
 * 6. Custom Hooks
 * + Advanced concepts
 */

function AppFull() {
  const [activeTab, setActiveTab] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const tabs = [
    { id: 1, label: '🎨 JSX & Components', Component: JSXComponents },
    { id: 2, label: '📊 State (useState)', Component: StateManagement },
    { id: 3, label: '⚡ Effects (useEffect)', Component: Effects },
    { id: 4, label: '🔗 Refs (useRef)', Component: Refs },
    { id: 5, label: '🌍 Context (useContext)', Component: Context },
    { id: 6, label: '🔧 Custom Hooks', Component: CustomHooks },
  ];

  const ActiveComponent = tabs[activeTab].Component;

  return (
    <div className={`app-full ${darkMode ? 'dark' : ''}`}>
      <header className="header-full">
        <h1>⚛️ React Concepts Masterclass</h1>
        <p>Complete coverage of React.dev essentials</p>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="btn-theme"
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </header>

      <div className="tabs-navigation">
        {tabs.map((tab, idx) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(idx)}
            className={`tab-btn ${activeTab === idx ? 'active' : ''}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <main className="content-area">
        <ActiveComponent />
      </main>

      <footer className="footer-full">
        <p>📚 Master React with hands-on examples</p>
        <p>📖 Based on React.dev official documentation</p>
      </footer>
    </div>
  );
}

export default AppFull;
