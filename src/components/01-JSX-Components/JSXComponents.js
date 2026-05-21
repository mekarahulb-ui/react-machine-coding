import React from 'react';
import './JSXComponents.css';

/**
 * Concept 1: JSX & Components
 * 
 * Demonstrates:
 * - Functional components
 * - JSX syntax
 * - Props passing
 * - Component composition
 */

// Simple functional component
function Welcome({ name }) {
  return <p>Hello, {name}!</p>;
}

// Component with complex JSX
function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p className="price">${product.price}</p>
      <p className="description">{product.description}</p>
      <button className="btn-add">Add to Cart</button>
    </div>
  );
}

// Component composition
function ProductList() {
  const products = [
    { id: 1, name: 'Laptop', price: 999, description: 'High-performance laptop' },
    { id: 2, name: 'Phone', price: 599, description: 'Latest smartphone' },
    { id: 3, name: 'Tablet', price: 399, description: 'Portable tablet' }
  ];

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

function JSXComponents() {
  return (
    <div className="jsx-container">
      <h2>🎨 JSX & Components</h2>
      
      <section className="concept-section">
        <h3>What is JSX?</h3>
        <p>JSX lets you write HTML-like code in JavaScript. It gets compiled to React.createElement() calls.</p>
        
        <div className="example-code">
          <pre>{`// JSX
const element = <h1>Hello, World!</h1>;

// Compiles to
const element = React.createElement('h1', null, 'Hello, World!');`}</pre>
        </div>
      </section>

      <section className="concept-section">
        <h3>Component Composition</h3>
        <div className="components-demo">
          <Welcome name="Alice" />
          <Welcome name="Bob" />
        </div>
      </section>

      <section className="concept-section">
        <h3>Props & Component Reusability</h3>
        <ProductList />
      </section>

      <section className="concept-section">
        <h3>Key Takeaways</h3>
        <ul>
          <li>Components are JavaScript functions returning JSX</li>
          <li>Props allow data to flow from parent to child</li>
          <li>Composition makes code reusable and modular</li>
          <li>JSX is just syntactic sugar for React.createElement()</li>
        </ul>
      </section>
    </div>
  );
}

export default JSXComponents;
