import React, { createContext, useState, useContext } from 'react';
import './Context.css';

/**
 * Concept 5: Context API (useContext)
 * 
 * Demonstrates:
 * - Creating context
 * - Context provider
 * - useContext hook
 * - Global state without prop drilling
 * - Multiple context values
 */

// Create a context
const UserContext = createContext();
const SettingsContext = createContext();

// Provider component
function UserProvider({ children }) {
  const [user, setUser] = useState({ name: 'John Doe', email: 'john@example.com' });

  const updateUser = (newUser) => setUser(newUser);
  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, updateUser, logout }}>
      {children}
    </UserContext.Provider>
  );
}

function SettingsProvider({ children }) {
  const [settings, setSettings] = useState({ theme: 'light', notifications: true });

  const updateSettings = (newSettings) => setSettings(prev => ({ ...prev, ...newSettings }));

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}

// Consumer component
function UserProfile() {
  const { user, logout } = useContext(UserContext);

  if (!user) {
    return <p>Please log in</p>;
  }

  return (
    <div className="context-box">
      <h4>User Profile (from Context)</h4>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

function SettingsPanel() {
  const { settings, updateSettings } = useContext(SettingsContext);

  return (
    <div className="context-box">
      <h4>Settings</h4>
      <label>
        <input
          type="checkbox"
          checked={settings.theme === 'dark'}
          onChange={(e) => updateSettings({ theme: e.target.checked ? 'dark' : 'light' })}
        />
        Dark Mode
      </label>
      <label>
        <input
          type="checkbox"
          checked={settings.notifications}
          onChange={(e) => updateSettings({ notifications: e.target.checked })}
        />
        Notifications
      </label>
      <div className="settings-display">
        <p>Theme: {settings.theme}</p>
        <p>Notifications: {settings.notifications ? '✓' : '✕'}</p>
      </div>
    </div>
  );
}

function Context() {
  return (
    <div className="context-container">
      <h2>🌍 Context API (useContext)</h2>
      
      <section className="concept-section">
        <h3>What is Context?</h3>
        <p>
          Context allows you to pass data through the component tree without having to pass props down
          at every level. Perfect for global state like themes, user data, and settings.
        </p>
        
        <div className="example-code">
          <pre>{`const MyContext = createContext();

// Provider
<MyContext.Provider value={data}>
  <ChildComponent />
</MyContext.Provider>

// Consumer
const data = useContext(MyContext);`}</pre>
        </div>
      </section>

      <section className="concept-section">
        <h3>Avoiding Prop Drilling</h3>
        <div className="prop-drilling-comparison">
          <div className="without-context">
            <h5>❌ Without Context (Prop Drilling)</h5>
            <pre>{
`<App>
  <Header user={user} />
    <Nav user={user} />
      <Profile user={user} />
`
            }</pre>
          </div>
          <div className="with-context">
            <h5>✓ With Context</h5>
            <pre>{
`<UserProvider>
  <App>
    <Header />
      <Nav />
        <Profile /> {/* Can access user directly */}
`
            }</pre>
          </div>
        </div>
      </section>

      <section className="concept-section">
        <h3>Live Example</h3>
        <UserProvider>
          <SettingsProvider>
            <div className="context-demo">
              <UserProfile />
              <SettingsPanel />
            </div>
          </SettingsProvider>
        </UserProvider>
      </section>
    </div>
  );
}

export default Context;
