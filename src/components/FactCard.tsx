import React from 'react';
import { Info } from 'lucide-react';

interface FactCardProps {
  title: string;
  content: string;
}

const FactCard: React.FC<FactCardProps> = ({ title, content }) => (
  <div className="bg-blue-50 rounded-lg p-6 shadow-lg border border-blue-100">
    <div className="flex items-center space-x-3 mb-4">
      <Info className="h-6 w-6 text-blue-600" />
      <h3 className="text-lg font-semibold text-blue-900">{title}</h3>
    </div>
    <p className="text-blue-800">{content}</p>
  </div>
);

export default FactCard;