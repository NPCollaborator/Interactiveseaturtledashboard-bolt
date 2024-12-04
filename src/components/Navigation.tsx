import React from 'react';
import { Menu, Info, Heart, HelpingHand } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-teal-700 text-white p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Menu className="h-6 w-6" />
          <h1 className="text-xl font-bold">Sea Turtle Rescue</h1>
        </div>
        <div className="flex space-x-6">
          <NavItem icon={<Info />} text="About Cold Stunning" />
          <NavItem icon={<Heart />} text="Rescue Process" />
          <NavItem icon={<HelpingHand />} text="How to Help" />
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <button className="flex items-center space-x-2 hover:text-teal-200 transition-colors">
    {icon}
    <span>{text}</span>
  </button>
);

export default Navigation;