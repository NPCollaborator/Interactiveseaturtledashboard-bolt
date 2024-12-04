import React from 'react';
import InteractiveMap from './InteractiveMap';
import RescueSimulation from './RescueSimulation';
import TurtleStats from './TurtleStats';
import FactCard from './FactCard';

const MainDashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Left Column - Map and Facts */}
      <div className="col-span-12 lg:col-span-7 space-y-6">
        <div className="bg-white rounded-xl shadow-lg p-4">
          <h2 className="text-xl font-bold text-blue-900 mb-3">Cape Cod Bay Rescue Map</h2>
          <InteractiveMap />
        </div>
        <FactCard 
          title="Did You Know?"
          content="Cape Cod Bay acts as a trap for sea turtles feeding in the area. As water temperatures drop in late fall, turtles can become disoriented and cold-stunned, washing up on beaches."
        />
      </div>

      {/* Right Column - Stats and Simulation */}
      <div className="col-span-12 lg:col-span-5 space-y-6">
        <TurtleStats />
        <RescueSimulation />
      </div>
    </div>
  );
};

export default MainDashboard;