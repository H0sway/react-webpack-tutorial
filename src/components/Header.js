// Import React, no need to import the Component class separately as we won't be using it.
import React from 'react';

// Define the Header component
const Header = () => {
  // Functional components only need to return html, no need to call the return() method
  return (
    <div className="Header">
      <header>
        <h1>React and Webpack From Scratch</h1>
      </header>
    </div>
  )
};

// Export Header
export default Header;
