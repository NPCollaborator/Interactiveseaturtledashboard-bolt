import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ThermometerSnowflake, Users, Timer } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-blue-900 to-blue-800 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.343 0L13.857 8.485 15.272 9.9l8.485-8.485h-1.414zM32 0l-9.9 9.9 1.415 1.415L33.414 0H32zM0 5.373l.828-.83L2.243 5.96 0 8.2V5.374zm0 5.656l.828-.829 5.657 5.657-1.414 1.414L0 11.03v-1.415zm0 5.657l.828-.828 8.485 8.485-1.414 1.414L0 16.687v-1.415zm0 5.657l.828-.828 11.314 11.314-1.414 1.414L0 22.343v-1.415zm0 5.657l.828-.828 14.142 14.142-1.414 1.414L0 28v-1.415zm0 5.657l.828-.828 16.97 16.97-1.414 1.415L0 33.657v-1.415zm0 5.657l.828-.828 19.8 19.8-1.415 1.414L0 39.314v-1.415zm0 5.657l.828-.828 22.627 22.627-1.414 1.414L0 44.97v-1.415zm0 5.657l.828-.828 25.456 25.456-1.414 1.414L0 50.627v-1.415zm0 5.657l.828-.828 28.284 28.284-1.414 1.414L0 56.284v-1.415zm0 5.657l.828-.828 31.113 31.113-1.414 1.414L0 61.94v-1.415zM5.373 60L60 5.373v2.828L8.2 60H5.374zm5.657 0L60 11.03v2.828L13.857 60h-2.827zm5.657 0L60 16.686v2.83L19.514 60h-2.828zm5.657 0L60 22.343v2.828L25.17 60h-2.828zm5.657 0L60 28v2.828L30.828 60h-2.828zm5.657 0L60 33.657v2.83L36.485 60h-2.828zm5.657 0L60 39.314v2.828L42.142 60h-2.828zm5.657 0L60 44.97v2.83L47.8 60h-2.828zm5.657 0L60 50.627v2.83L53.456 60h-2.828zm5.657 0L60 56.284v2.83L59.084 60h-2.828z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E\")",
        }} />
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Saving Sea Turtles from Cold-Stunning
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Join our mission to rescue and rehabilitate cold-stunned sea turtles in Cape Cod Bay. 
              Every turtle counts, every minute matters.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <StatsCard
                icon={<ThermometerSnowflake className="h-8 w-8" />}
                value="176"
                label="Turtles Rescued"
              />
              <StatsCard
                icon={<Users className="h-8 w-8" />}
                value="250+"
                label="Active Volunteers"
              />
            </div>

            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-colors">
              <span>Get Involved</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </motion.div>

          {/* Right column - Image grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1591025207163-942350e47db2?auto=format&fit=crop&q=80"
                alt="Turtle Rescue"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1571875257727-256c39da42af?auto=format&fit=crop&q=80"
                alt="Medical Care"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&q=80"
                alt="Turtle Swimming"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
              <div className="bg-blue-600 rounded-lg p-6 h-48 flex flex-col justify-center">
                <Timer className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Quick Response</h3>
                <p className="text-sm text-blue-100">Every minute counts in saving a cold-stunned turtle</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const StatsCard = ({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) => (
  <div className="bg-blue-800/50 rounded-lg p-4">
    {icon}
    <div className="mt-2">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-blue-200 text-sm">{label}</div>
    </div>
  </div>
);

export default HeroSection;