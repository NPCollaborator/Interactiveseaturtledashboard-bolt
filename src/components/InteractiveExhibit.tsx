import React, { useState } from 'react';
import { Thermometer, Droplets, Timer } from 'lucide-react';

const InteractiveExhibit = () => {
  const [temperature, setTemperature] = useState(50);
  const [showEffects, setShowEffects] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-xl p-6">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">Cold-Stunning Simulator</h2>
      
      <div className="flex items-center space-x-4 mb-8">
        <Thermometer className="h-8 w-8 text-blue-600" />
        <input
          type="range"
          min="32"
          max="75"
          value={temperature}
          onChange={(e) => {
            setTemperature(Number(e.target.value));
            setShowEffects(Number(e.target.value) < 50);
          }}
          className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
        />
        <span className="text-lg font-medium text-blue-900">{temperature}°F</span>
      </div>

      <div className="relative h-64 bg-blue-100 rounded-lg overflow-hidden">
        <div className={`absolute inset-0 bg-[url('https://images.unsplash.com/photo-1591025207163-942350e47db2?auto=format&fit=crop&q=80')] bg-cover bg-center transition-opacity duration-500 ${
          showEffects ? 'opacity-50' : 'opacity-100'
        }`}>
          {showEffects && (
            <div className="absolute inset-0 bg-blue-900/50 flex items-center justify-center">
              <div className="text-white text-center p-4">
                <Timer className="h-12 w-12 mx-auto mb-2" />
                <p className="text-lg font-semibold">Cold-Stunning Alert!</p>
                <p>Sea turtle becoming lethargic and unable to swim</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InteractiveExhibit;