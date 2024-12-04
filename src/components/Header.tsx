import React from 'react';
import { Waves } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Waves className="h-8 w-8" />
            <div>
              <h1 className="text-2xl font-bold">National Marine Life Center</h1>
              <p className="text-sm opacity-90">Cape Cod Sea Turtle Rescue Dashboard</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm opacity-90">Emergency Hotline:</p>
            <p className="font-bold">1-800-9TURTLE</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;