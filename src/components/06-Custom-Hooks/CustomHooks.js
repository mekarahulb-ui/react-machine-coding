import React, { useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useToggle } from '../../hooks/useToggle';
import { useFetch } from '../../hooks/useFetch';
import './CustomHooks.css';

/**
 * Concept 6: Custom Hooks
 * 
 * Demonstrates:
 * - Creating custom hooks
 * - Extracting component logic
 * - Reusing hook logic across components
 * - Combining multiple hooks
 */

function LocalStorageExample() {
  const [value, setValue] = useLocalStorage('myKey', 'initial');
  const [input, setInput] = useState('');

  const handleSave = () => {
    setValue(input);
    setInput('');
  };

  return (
    <div className="custom-hook-example">
      <h4>useLocalStorage Hook</h4>
      <p>Saved Value: <strong>{value}</strong></p>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter value to save"
      />
      <button onClick={handleSave}>Save to localStorage</button>
      <p className="note">✓ Value persists after page reload</p>
    </div>
  );
}

function ToggleExample() {
  const [isOpen, toggle] = useToggle(false);

  return (
    <div className="custom-hook-example">
      <h4>useToggle Hook</h4>
      <button onClick={toggle}>
        {isOpen ? 'Hide' : 'Show'} Content
      </button>
      {isOpen && (
        <div className="toggle-content">
          <p>This content can be toggled on/off</p>
        </div>
      )}
    </div>
  );
}

function FetchExample() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users/1');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="custom-hook-example">
      <h4>useFetch Hook</h4>
      {data && (
        <div className="fetch-result">
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Phone:</strong> {data.phone}</p>
        </div>
      )}
    </div>
  );
}

function CustomHooks() {
  return (
    <div className="custom-hooks-container">
      <h2>🔧 Custom Hooks</h2>
      
      <section className="concept-section">
        <h3>What are Custom Hooks?</h3>
        <p>
          Custom hooks are JavaScript functions that use React hooks to extract component logic.
          They let you reuse logic across multiple components and follow the hooks rules.
        </p>
        
        <div className="example-code">
          <pre>{`// Custom hook pattern
function useMyHook(param) {
  const [state, setState] = useState(null);
  
  useEffect(() => {
    // Logic here
  }, [param]);
  
  return [state, setState];
}

// Usage
function MyComponent() {
  const [value, setValue] = useMyHook('param');
}`}</pre>
        </div>
      </section>

      <section className="concept-section">
        <h3>Common Custom Hooks</h3>
        <ul>
          <li><code>useLocalStorage</code> - Sync state with localStorage</li>
          <li><code>useFetch</code> - Handle API requests</li>
          <li><code>useToggle</code> - Boolean state toggle</li>
          <li><code>usePrevious</code> - Track previous value</li>
          <li><code>useAsync</code> - Handle async operations</li>
          <li><code>useMount</code> - Run code on mount</li>
        </ul>
      </section>

      <section className="concept-section">
        <h3>Examples</h3>
        <div className="examples-grid">
          <LocalStorageExample />
          <ToggleExample />
          <FetchExample />
        </div>
      </section>

      <section className="concept-section">
        <h3>Benefits</h3>
        <ul>
          <li>✓ Reuse logic across components</li>
          <li>✓ Cleaner, more readable components</li>
          <li>✓ Easier to test</li>
          <li>✓ Extract complex logic</li>
          <li>✓ Share stateful logic</li>
        </ul>
      </section>
    </div>
  );
}

export default CustomHooks;
