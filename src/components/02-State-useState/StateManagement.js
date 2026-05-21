import React, { useState } from 'react';
import './StateManagement.css';

/**
 * Concept 2: State Management (useState)
 * 
 * Demonstrates:
 * - useState hook
 * - Updating state
 * - Multiple state variables
 * - Functional state updates
 * - State with complex types
 */

// Simple state example
function SimpleCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className="state-example">
      <h4>Simple Counter</h4>
      <p>Count: <strong>{count}</strong></p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

// Functional state update
function FunctionalStateUpdate() {
  const [count, setCount] = useState(0);

  const handleMultipleClicks = () => {
    // Functional updates guarantee latest state
    setCount(c => c + 1);
    setCount(c => c + 1);
    setCount(c => c + 1);
  };

  return (
    <div className="state-example">
      <h4>Functional State Updates</h4>
      <p>Count: <strong>{count}</strong></p>
      <button onClick={handleMultipleClicks}>Click (adds 3)</button>
      <p className="note">✓ Uses functional updates for reliable state changes</p>
    </div>
  );
}

// Multiple state variables
function MultipleStates() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);

  return (
    <div className="state-example">
      <h4>Multiple State Variables</h4>
      <div className="form-group">
        <label>Name:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          type="email"
        />
      </div>
      <div className="form-group">
        <label>Age:</label>
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter age"
          type="number"
        />
      </div>
      {name && <p>Hello, {name}! Your email is {email} and you are {age} years old.</p>}
    </div>
  );
}

// Complex state (arrays/objects)
function ComplexState() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');

  const addItem = () => {
    if (input.trim()) {
      setItems([...items, { id: Date.now(), text: input }]);
      setInput('');
    }
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="state-example">
      <h4>Complex State (Arrays)</h4>
      <div className="input-group">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addItem()}
          placeholder="Add an item..."
        />
        <button onClick={addItem}>Add</button>
      </div>
      <ul className="items-list">
        {items.map(item => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => removeItem(item.id)}>✕</button>
          </li>
        ))}
      </ul>
      {items.length === 0 && <p className="empty">No items yet</p>}
    </div>
  );
}

function StateManagement() {
  return (
    <div className="state-container">
      <h2>📊 State Management (useState)</h2>
      
      <section className="concept-section">
        <h3>What is State?</h3>
        <p>
          State is data that changes over time. When state changes, React re-renders the component.
          Use the useState hook to add state to functional components.
        </p>
        
        <div className="example-code">
          <pre>{`const [count, setCount] = useState(0);
// count = current state value
// setCount = function to update state
// 0 = initial value`}</pre>
        </div>
      </section>

      <section className="concept-section">
        <h3>Examples</h3>
        <div className="examples-grid">
          <SimpleCounter />
          <FunctionalStateUpdate />
          <MultipleStates />
          <ComplexState />
        </div>
      </section>

      <section className="concept-section">
        <h3>Important Rules</h3>
        <ul>
          <li>✅ Use functional updates for multiple state changes</li>
          <li>✅ Create new arrays/objects instead of mutating</li>
          <li>✅ State updates are asynchronous</li>
          <li>❌ Don't call hooks conditionally</li>
          <li>❌ Don't mutate state directly</li>
        </ul>
      </section>
    </div>
  );
}

export default StateManagement;
