import React, { useState } from 'react';
import { Turtle, AlertTriangle, Heart } from 'lucide-react';
import type { TurtleData } from '../types';

const RescueSimulation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [turtle, setTurtle] = useState<TurtleData>({
    id: '1',
    species: 'Kemp\'s Ridley',
    location: 'Cape Cod Bay',
    status: 'rescued',
    rescueDate: new Date().toISOString(),
  });

  const steps = [
    {
      title: 'Cold-Stunning Event',
      description: 'When water temperatures drop below 50°F, sea turtles become lethargic and unable to swim.',
      icon: <AlertTriangle className="h-12 w-12 text-red-500" />,
    },
    {
      title: 'Rescue Operation',
      description: 'Trained volunteers patrol beaches to locate and rescue cold-stunned turtles.',
      icon: <Turtle className="h-12 w-12 text-teal-500" />,
    },
    {
      title: 'Rehabilitation',
      description: 'Turtles receive medical care and gradually warm up in specialized facilities.',
      icon: <Heart className="h-12 w-12 text-pink-500" />,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-teal-800 mb-6">Rescue Journey</h2>
      
      <div className="flex justify-between mb-8">
        {steps.map((step, index) => (
          <StepIndicator
            key={index}
            {...step}
            isActive={currentStep === index}
            isComplete={currentStep > index}
          />
        ))}
      </div>

      <div className="mt-8">
        <TurtleStatus turtle={turtle} step={currentStep} />
        
        <div className="flex justify-between mt-6">
          <button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className="px-4 py-2 bg-teal-600 text-white rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => {
              setCurrentStep(Math.min(steps.length - 1, currentStep + 1));
              if (currentStep === 1) {
                setTurtle(t => ({ ...t, status: 'rehabilitating' }));
              } else if (currentStep === 2) {
                setTurtle(t => ({ ...t, status: 'released' }));
              }
            }}
            disabled={currentStep === steps.length - 1}
            className="px-4 py-2 bg-teal-600 text-white rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const StepIndicator = ({ 
  title, 
  icon, 
  isActive, 
  isComplete 
}: { 
  title: string; 
  icon: React.ReactNode; 
  isActive: boolean; 
  isComplete: boolean;
}) => (
  <div className="flex flex-col items-center">
    <div
      className={`rounded-full p-3 ${
        isActive
          ? 'bg-teal-100 text-teal-600'
          : isComplete
          ? 'bg-teal-600 text-white'
          : 'bg-gray-100 text-gray-400'
      }`}
    >
      {icon}
    </div>
    <span className="mt-2 text-sm font-medium text-gray-600">{title}</span>
  </div>
);

const TurtleStatus = ({ turtle, step }: { turtle: TurtleData; step: number }) => (
  <div className="bg-teal-50 rounded-lg p-4">
    <h3 className="font-bold text-teal-800">Turtle Status</h3>
    <div className="mt-2 space-y-2">
      <p>Species: {turtle.species}</p>
      <p>Location: {turtle.location}</p>
      <p>Status: {turtle.status}</p>
    </div>
  </div>
);

export default RescueSimulation;