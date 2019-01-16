// import React
import React, { Component } from 'react';

// import components
import Header from './components/Header';
import Footer from './components/Footer';

// import styling
import './scss/App.scss';

// Define the App component
class App extends Component {
  // Render the HTML that's returned in this method
  render() {
    return (
      <div className="App">
        {/* Call Header and Footer as if they were HTML elements */}
        {/* This is how to comment code in JSX, normal // works outside of the HTML parts */}
        <Header />

        <h3>Hello there!</h3>

        <Footer />
      </div>
    )
  }
};

// Export App
export default App;
