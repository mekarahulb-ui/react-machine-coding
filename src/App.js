import React, { useState } from 'react';
import './App.css';

// Existing imports
import Counter from './components/1-Counter/Counter';
import TodoList from './components/2-TodoList/TodoList';
import SearchFilter from './components/3-SearchFilter/SearchFilter';
import DebouncedInput from './components/4-DebouncedInput/DebouncedInput';
import Accordion from './components/5-Accordion/Accordion';
import Modal from './components/6-Modal/Modal';
import Pagination from './components/7-Pagination/Pagination';
import StarRating from './components/19-StarRating/StarRating';
import Tabs from './components/16-Tabs/Tabs';

// New React concepts imports
import JSXComponents from './components/01-JSX-Components/JSXComponents';
import StateManagement from './components/02-State-useState/StateManagement';
import Effects from './components/03-Effects-useEffect/Effects';
import Refs from './components/04-Refs-useRef/Refs';
import Context from './components/05-Context-useContext/Context';
import CustomHooks from './components/06-Custom-Hooks/CustomHooks';

function App() {
  const [activeSection, setActiveSection] = useState('problems');
  const [darkMode, setDarkMode] = useState(false);

  const machineCodeProblems = [
    { id: 1, name: 'Counter', Component: Counter },
    { id: 2, name: 'Todo List', Component: TodoList },
    { id: 3, name: 'Search/Filter', Component: SearchFilter },
    { id: 4, name: 'Debounced Input', Component: DebouncedInput },
    { id: 5, name: 'Accordion', Component: Accordion },
    { id: 6, name: 'Modal', Component: Modal },
    { id: 7, name: 'Pagination', Component: Pagination },
    { id: 16, name: 'Tabs', Component: Tabs },
    { id: 19, name: 'Star Rating', Component: StarRating },
  ];

  const reactConcepts = [
    { id: 1, label: '🎨 JSX & Components', Component: JSXComponents },
    { id: 2, label: '📊 State (useState)', Component: StateManagement },
    { id: 3, label: '⚡ Effects (useEffect)', Component: Effects },
    { id: 4, label: '🔗 Refs (useRef)', Component: Refs },
    { id: 5, label: '🌍 Context (useContext)', Component: Context },
    { id: 6, label: '🔧 Custom Hooks', Component: CustomHooks },
  ];

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <header className="app-header">
        <div className="header-content">
          <h1>⚛️ React Learning Hub</h1>
          <p>Machine Coding Problems + Complete React Concepts</p>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="btn-theme"
          title="Toggle dark mode"
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </header>

      <nav className="main-nav">
        <button
          onClick={() => setActiveSection('problems')}
          className={`nav-btn ${activeSection === 'problems' ? 'active' : ''}`}
        >
          💻 Machine Coding Problems
        </button>
        <button
          onClick={() => setActiveSection('concepts')}
          className={`nav-btn ${activeSection === 'concepts' ? 'active' : ''}`}
        >
          📚 React Concepts
        </button>
      </nav>

      <div className="app-container">
        {activeSection === 'problems' ? (
          <div className="section">
            <h2>💻 Top React Machine Coding Problems</h2>
            <div className="problems-display">
              {machineCodeProblems.map(({ id, name, Component }) => (
                <div key={id} className="problem-wrapper">
                  <div className="problem-title">{name}</div>
                  <Component />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="section">
            <h2>📚 React Concepts from React.dev</h2>
            <div className="concepts-tabs">
              {reactConcepts.map((concept, idx) => (
                <div key={concept.id} className="concept-item">
                  <h3>{concept.label}</h3>
                  <concept.Component />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <footer className="app-footer">
        <p>🎓 Complete React Learning Resource | Problems + Concepts</p>
        <p>📖 Based on React.dev Official Documentation</p>
      </footer>
    </div>
  );
}

export default App;
