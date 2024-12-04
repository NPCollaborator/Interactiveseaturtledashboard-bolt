import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, AlertTriangle, MapPin } from 'lucide-react';
import BeachPatrolSlider from './BeachPatrolSlider';
import TemperatureSimulator from './TemperatureSimulator';
import InteractiveMap from '../InteractiveMap';

const RescuePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <button 
            onClick={() => window.location.href = '/'}
            className="text-white flex items-center gap-2 hover:text-blue-200"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Journey</span>
          </button>
          
          <div className="bg-red-500 px-4 py-2 rounded-full flex items-center">
            <AlertTriangle className="h-5 w-5 mr-2" />
            <span className="font-bold">Rescue Hotline: 1-888-9TURTLE</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <BeachPatrolSlider />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h2 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <MapPin className="h-6 w-6" />
                  Active Rescue Areas
                </h2>
                <div className="h-[400px] rounded-lg overflow-hidden">
                  <InteractiveMap />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <TemperatureSimulator />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h2 className="text-xl font-bold text-blue-900 mb-4">Emergency Response Guide</h2>
              <div className="space-y-4">
                <ResponseStep 
                  number="1"
                  title="Call the Hotline"
                  description="Immediately call 1-888-9TURTLE to report the stranded turtle"
                />
                <ResponseStep 
                  number="2"
                  title="Document Location"
                  description="Note exact location, landmarks, and time of discovery"
                />
                <ResponseStep 
                  number="3"
                  title="Protect from Elements"
                  description="Shield turtle from wind, but do not move or cover with blankets"
                />
                <ResponseStep 
                  number="4"
                  title="Wait for Response Team"
                  description="Stay with turtle if possible until rescuers arrive"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ResponseStep = ({ 
  number, 
  title, 
  description 
}: { 
  number: string; 
  title: string; 
  description: string;
}) => (
  <div className="flex gap-4 items-start">
    <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0">
      {number}
    </div>
    <div>
      <h3 className="font-semibold text-blue-900">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

export default RescuePage;