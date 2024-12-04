import React from 'react';
import { motion } from 'framer-motion';
import { Info, AlertTriangle, Heart } from 'lucide-react';

const StorySection = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="prose max-w-none"
      >
        <h2 className="text-2xl font-bold text-blue-900 mb-6">The Cold-Stunning Crisis</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <p className="text-gray-700 leading-relaxed">
              Every year, as autumn turns to winter in Cape Cod Bay, a silent crisis unfolds beneath 
              the waves. Sea turtles, drawn to the rich feeding grounds during summer months, can 
              become trapped by the hook-like shape of the bay as water temperatures rapidly decline.
            </p>
            
            <p className="text-gray-700 leading-relaxed mt-4">
              When water temperatures drop below 50°F (10°C), these cold-blooded reptiles experience 
              a condition known as "cold-stunning." Unable to regulate their body temperature, they 
              become lethargic and eventually float to the surface, at the mercy of winds and currents.
            </p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
              <AlertTriangle className="h-6 w-6 mr-2 text-blue-600" />
              Critical Temperature Zones
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center text-blue-800">
                <div className="w-4 h-4 rounded-full bg-green-500 mr-3"></div>
                Above 70°F: Safe swimming temperature
              </li>
              <li className="flex items-center text-blue-800">
                <div className="w-4 h-4 rounded-full bg-yellow-500 mr-3"></div>
                50-70°F: Caution zone
              </li>
              <li className="flex items-center text-blue-800">
                <div className="w-4 h-4 rounded-full bg-red-500 mr-3"></div>
                Below 50°F: Cold-stunning danger
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
            <Heart className="h-6 w-6 mr-2 text-blue-600" />
            The Race Against Time
          </h3>
          <p className="text-gray-700 leading-relaxed">
            When a cold-stunned turtle is found, every minute counts. A network of dedicated 
            volunteers and professionals springs into action, working tirelessly to rescue, 
            rehabilitate, and eventually release these endangered creatures back into warmer waters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rescueSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white border border-blue-100 rounded-lg p-4 shadow-sm"
            >
              <h4 className="font-semibold text-blue-900 mb-2">{step.title}</h4>
              <p className="text-sm text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const rescueSteps = [
  {
    title: "1. Initial Response",
    description: "Beach patrols locate and carefully transport cold-stunned turtles to triage facilities."
  },
  {
    title: "2. Medical Assessment",
    description: "Veterinarians evaluate each turtle's condition and begin appropriate treatment protocols."
  },
  {
    title: "3. Rehabilitation",
    description: "Turtles receive specialized care until they're strong enough to return to the ocean."
  }
];

export default StorySection;