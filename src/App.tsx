import React from 'react';
import JourneyHome from './components/journey/JourneyHome';
import RescuePage from './components/journey/RescuePage';

function App() {
  // Simple routing based on window.location.pathname
  const getComponent = () => {
    const path = window.location.pathname;
    switch (path) {
      case '/rescue':
        return <RescuePage />;
      default:
        return <JourneyHome />;
    }
  };

  return (
    <div className="min-h-screen">
      {getComponent()}
    </div>
  );
}

export default App;