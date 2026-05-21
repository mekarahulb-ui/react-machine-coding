import React, { useRef, useState } from 'react';
import './Refs.css';

/**
 * Concept 4: Refs (useRef)
 * 
 * Demonstrates:
 * - useRef hook
 * - Direct DOM access
 * - Persisting values across renders
 * - Not causing re-renders
 */

// Focus management with refs
function FocusInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
    inputRef.current.value = 'Focused!';
  };

  return (
    <div className="ref-example">
      <h4>Focus Management</h4>
      <input ref={inputRef} placeholder="Click button to focus" type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

// Persisting value with refs
function PersistingValue() {
  const countRef = useRef(0);
  const [renderCount, setRenderCount] = useState(0);

  const increment = () => {
    countRef.current++;
    // This doesn't trigger re-render
  };

  return (
    <div className="ref-example">
      <h4>Persisting Values (No Re-render)</h4>
      <p>Ref Value (no re-render): {countRef.current}</p>
      <p>Render Count: {renderCount}</p>
      <button onClick={increment}>Increment Ref</button>
      <button onClick={() => setRenderCount(renderCount + 1)}>Trigger Re-render</button>
      <p className="note">✓ Ref increments but doesn't cause re-render</p>
    </div>
  );
}

// Accessing DOM properties
function DOMAccess() {
  const divRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  const getSize = () => {
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();
      setSize({ width: Math.round(rect.width), height: Math.round(rect.height) });
    }
  };

  return (
    <div className="ref-example">
      <h4>Accessing DOM Properties</h4>
      <div ref={divRef} className="box">Box Element</div>
      <button onClick={getSize}>Get Size</button>
      {size.width > 0 && <p>Size: {size.width}x{size.height}px</p>}
    </div>
  );
}

// Storing timer IDs
function TimerWithRef() {
  const timerRef = useRef(null);
  const [seconds, setSeconds] = useState(0);

  const startTimer = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const resetTimer = () => {
    stopTimer();
    setSeconds(0);
  };

  return (
    <div className="ref-example">
      <h4>Storing Timer IDs</h4>
      <p>Seconds: <strong>{seconds}</strong></p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

function Refs() {
  return (
    <div className="refs-container">
      <h2>🔗 Refs (useRef)</h2>
      
      <section className="concept-section">
        <h3>What are Refs?</h3>
        <p>
          Refs let you access DOM nodes or store values that persist across renders without causing re-renders.
          Use them for focus management, triggering animations, or integrating with third-party libraries.
        </p>
        
        <div className="example-code">
          <pre>{`const ref = useRef(initialValue);

// Access the value
ref.current

// For DOM access
const inputRef = useRef(null);
<input ref={inputRef} />
inputRef.current.focus();`}</pre>
        </div>
      </section>

      <section className="concept-section">
        <h3>Refs vs State</h3>
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Refs</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Doesn't cause re-render</td>
              <td>Causes re-render</td>
            </tr>
            <tr>
              <td>Mutable (.current)</td>
              <td>Immutable</td>
            </tr>
            <tr>
              <td>Returns same object</td>
              <td>Returns new reference</td>
            </tr>
            <tr>
              <td>Use for DOM/timers</td>
              <td>Use for display data</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="concept-section">
        <h3>Examples</h3>
        <div className="examples-grid">
          <FocusInput />
          <PersistingValue />
          <DOMAccess />
          <TimerWithRef />
        </div>
      </section>
    </div>
  );
}

export default Refs;
