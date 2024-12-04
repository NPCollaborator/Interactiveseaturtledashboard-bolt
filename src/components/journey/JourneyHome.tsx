import React from 'react';
import { motion } from 'framer-motion';
import { Ambulance, Stethoscope, Heart, Send } from 'lucide-react';

const JourneyHome = () => {
  const journeySteps = [
    {
      id: 'rescue',
      title: 'Rescue',
      description: 'Beach patrol and initial response',
      icon: <Ambulance className="h-8 w-8" />,
      color: 'from-red-500 to-red-600',
      link: '/rescue'
    },
    {
      id: 'medical',
      title: 'Medical Care',
      description: 'Treatment and stabilization',
      icon: <Stethoscope className="h-8 w-8" />,
      color: 'from-blue-500 to-blue-600',
      link: '/medical'
    },
    {
      id: 'rehab',
      title: 'Rehabilitation',
      description: 'Recovery and preparation',
      icon: <Heart className="h-8 w-8" />,
      color: 'from-purple-500 to-purple-600',
      link: '/rehab'
    },
    {
      id: 'release',
      title: 'Release',
      description: 'Return to the ocean',
      icon: <Send className="h-8 w-8" />,
      color: 'from-green-500 to-green-600',
      link: '/release'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sea Turtle Rescue Journey
          </h1>
          <p className="text-xl text-blue-100">
            Follow the path from rescue to release
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {journeySteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <JourneyCard {...step} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const JourneyCard = ({ 
  title, 
  description, 
  icon, 
  color, 
  link 
}: { 
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  link: string;
}) => (
  <button
    onClick={() => window.location.href = link}
    className="w-full h-full"
  >
    <div className={`bg-gradient-to-br ${color} p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-left`}>
      <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white/90">{description}</p>
      
      <div className="mt-4 flex items-center text-white/80">
        <span className="text-sm">Learn more</span>
        <motion.div
          className="ml-2"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          →
        </motion.div>
      </div>
    </div>
  </button>
);

export default JourneyHome;