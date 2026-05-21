import React, { useState, useEffect } from 'react';
import './Effects.css';

/**
 * Concept 3: Effects (useEffect)
 * 
 * Demonstrates:
 * - Side effects in components
 * - useEffect hook
 * - Dependency arrays
 * - Cleanup functions
 * - Running effects on mount/update
 */

// Effect on mount only
function EffectOnMount() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setMessage('✓ Component mounted! (useEffect with empty dependency))');
    }, 1000);

    // Cleanup function
    return () => clearTimeout(timer);
  }, []); // Empty dependency array = run once on mount

  return (
    <div className="effect-example">
      <h4>Effect on Mount</h4>
      <p>{message}</p>
    </div>
  );
}

// Effect with dependency
function EffectWithDependency() {
  const [count, setCount] = useState(0);
  const [log, setLog] = useState([]);

  useEffect(() => {
    // This runs whenever 'count' changes
    setLog(prev => [...prev, `Count changed to ${count}`]);
  }, [count]); // Dependency array with 'count'

  return (
    <div className="effect-example">
      <h4>Effect with Dependency</h4>
      <p>Count: <strong>{count}</strong></p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <div className="log">
        <h5>Log:</h5>
        {log.slice(-5).map((entry, idx) => (
          <p key={idx}>• {entry}</p>
        ))}
      </div>
    </div>
  );
}

// Effect with cleanup
function EffectWithCleanup() {
  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    // Cleanup function: stop interval when component unmounts or effect changes
    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  return (
    <div className="effect-example">
      <h4>Effect with Cleanup</h4>
      <p>Timer: <strong>{seconds}</strong>s</p>
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? 'Stop' : 'Start'}
      </button>
      <button onClick={() => setSeconds(0)}>Reset</button>
      <p className="note">✓ Cleanup runs before next effect or unmount</p>
    </div>
  );
}

// Multiple effects
function MultipleEffects() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setX(e.clientX);
      setY(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="effect-example">
      <h4>Multiple Effects & Event Listeners</h4>
      <p>Mouse Position: X={x}, Y={y}</p>
      <p className="note">✓ Move your mouse over this box</p>
    </div>
  );
}

function Effects() {
  return (
    <div className="effects-container">
      <h2>⚡ Effects (useEffect)</h2>
      
      <section className="concept-section">
        <h3>What are Effects?</h3>
        <p>
          Effects let you perform side effects in components (data fetching, subscriptions, DOM manipulations, etc.).
          They run after render and can optionally clean up.
        </p>
        
        <div className="example-code">
          <pre>{`useEffect(() => {
  // Side effect code here
  
  return () => {
    // Cleanup code (optional)
  };
}, [dependencies]); // Dependency array`}</pre>
        </div>
      </section>

      <section className="concept-section">
        <h3>Dependency Arrays</h3>
        <ul>
          <li><code>[]</code> - Run once on mount</li>
          <li><code>[value]</code> - Run when 'value' changes</li>
          <li>No array - Run after every render</li>
        </ul>
      </section>

      <section className="concept-section">
        <h3>Examples</h3>
        <div className="examples-grid">
          <EffectOnMount />
          <EffectWithDependency />
          <EffectWithCleanup />
          <MultipleEffects />
        </div>
      </section>
    </div>
  );
}

export default Effects;
