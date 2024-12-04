import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThermometerSnowflake, Calendar } from 'lucide-react';
import { format } from 'date-fns';

interface TempEffect {
  temp: number;
  description: string;
  image: string;
  effect: string;
  color: string;
}

const tempEffects: TempEffect[] = [
  {
    temp: 75,
    description: "Normal Swimming Behavior",
    image: "https://www.fisheries.noaa.gov/s3/dam-migration/green_sea_turtle_swimming_in_the_flower_garden_banks_national_marine_sanctuary.jpg",
    effect: "Turtles actively swimming and feeding",
    color: "bg-green-500"
  },
  {
    temp: 65,
    description: "Slightly Reduced Activity",
    image: "https://www.fisheries.noaa.gov/s3/dam-migration/kemps_ridley_sea_turtle_swimming_in_water.jpg",
    effect: "Swimming speed begins to decrease",
    color: "bg-green-300"
  },
  {
    temp: 55,
    description: "Early Warning Signs",
    image: "https://www.fisheries.noaa.gov/s3/dam-migration/loggerhead_sea_turtle_swimming_in_water_noaa.jpg",
    effect: "Noticeably slower movement, reduced feeding",
    color: "bg-yellow-400"
  },
  {
    temp: 50,
    description: "Critical Temperature",
    image: "https://www.fisheries.noaa.gov/s3/2024-06/Cold-stunned-sea-turtle-rescued-Credit-Mass-Audubon-Wellfleet-Bay.jpg",
    effect: "Beginning of cold-stunning, lethargy sets in",
    color: "bg-orange-500"
  },
  {
    temp: 40,
    description: "Severe Cold-Stunning",
    image: "https://www.massaudubon.org/var/site/storage/images/6/1/8/2/2052816-1-eng-US/290b35f6bc72-ST2022_Kathy-Herrick-ands-turtles.jpg",
    effect: "Unable to swim, immediate rescue needed",
    color: "bg-red-600"
  }
];

const months = [
  { name: 'Aug', temp: 72 },
  { name: 'Sep', temp: 68 },
  { name: 'Oct', temp: 58 },
  { name: 'Nov', temp: 48 },
  { name: 'Dec', temp: 42 },
  { name: 'Jan', temp: 40 }
];

const TemperatureSimulator = () => {
  const [temperature, setTemperature] = useState(65);
  const [monthIndex, setMonthIndex] = useState(0);
  
  const getCurrentEffect = () => {
    return tempEffects.reduce((prev, curr) => {
      return Math.abs(curr.temp - temperature) < Math.abs(prev.temp - temperature) ? curr : prev;
    });
  };

  const currentEffect = getCurrentEffect();

  const handleMonthChange = (index: number) => {
    setMonthIndex(index);
    setTemperature(months[index].temp);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
        <ThermometerSnowflake className="h-6 w-6" />
        Temperature Impact Simulator
      </h2>

      <div className="flex gap-8">
        {/* Left side - Temperature and Month sliders */}
        <div className="w-32 flex flex-col items-center">
          {/* Temperature slider */}
          <div className="relative h-64 flex items-center">
            <span className="absolute -left-6 top-0 text-sm font-medium text-gray-600">75°F</span>
            <div className="h-full bg-gray-200 rounded-full w-4 relative mx-4">
              <input
                type="range"
                min="40"
                max="75"
                value={temperature}
                onChange={(e) => setTemperature(Number(e.target.value))}
                className="absolute h-full w-8 -left-2 opacity-0 cursor-pointer"
                style={{ WebkitAppearance: 'slider-vertical' }}
              />
              <motion.div
                className={`absolute bottom-0 left-0 right-0 rounded-full transition-all ${currentEffect.color}`}
                style={{
                  height: `${((temperature - 40) / (75 - 40)) * 100}%`
                }}
              />
            </div>
            <span className="absolute -left-6 bottom-0 text-sm font-medium text-gray-600">40°F</span>
          </div>

          {/* Month slider */}
          <div className="mt-8 w-full">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-600">Month</span>
            </div>
            <div className="space-y-2">
              {months.map((month, index) => (
                <button
                  key={month.name}
                  onClick={() => handleMonthChange(index)}
                  className={`w-full py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                    monthIndex === index 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {month.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right side - Effect visualization */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentEffect.temp}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              <div className="relative h-48 rounded-lg overflow-hidden">
                <img
                  src={currentEffect.image}
                  alt={currentEffect.description}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-bold text-lg">{currentEffect.description}</h3>
                  <p className="text-sm text-white/90">{currentEffect.effect}</p>
                </div>
              </div>

              <div className={`p-4 rounded-lg ${currentEffect.color.replace('bg-', 'bg-opacity-20')} border ${currentEffect.color.replace('bg-', 'border-')}`}>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">Current Temperature: {temperature}°F</div>
                    <div className="text-sm text-gray-600 mt-1">{currentEffect.effect}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{months[monthIndex].name}</div>
                    <div className="text-sm text-gray-600">Typical temp: {months[monthIndex].temp}°F</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default TemperatureSimulator;