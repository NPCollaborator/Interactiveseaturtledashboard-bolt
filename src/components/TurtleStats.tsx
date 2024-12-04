import React from 'react';
import { Turtle, ThermometerSnowflake, Activity } from 'lucide-react';

const TurtleStats = () => {
  const stats = [
    {
      label: 'Turtles Rescued',
      value: '176',
      icon: <Turtle className="h-6 w-6 text-blue-600" />,
      change: '+12 this week'
    },
    {
      label: 'Water Temperature',
      value: '48°F',
      icon: <ThermometerSnowflake className="h-6 w-6 text-blue-600" />,
      change: '-3°F from yesterday'
    },
    {
      label: 'Success Rate',
      value: '82%',
      icon: <Activity className="h-6 w-6 text-blue-600" />,
      change: 'Released back to ocean'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-blue-900 mb-4">Current Statistics</h2>
      <div className="grid grid-cols-1 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center space-x-4 p-3 bg-blue-50 rounded-lg">
            {stat.icon}
            <div>
              <div className="text-2xl font-bold text-blue-900">{stat.value}</div>
              <div className="text-sm text-blue-600">{stat.label}</div>
              <div className="text-xs text-gray-500">{stat.change}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TurtleStats;