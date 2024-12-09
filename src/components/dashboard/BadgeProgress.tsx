import React from 'react';

interface Badge {
  id: string;
  name: string;
  icon: React.ReactNode;
  completed: boolean;
}

interface BadgeProgressProps {
  title: string;
  badges: Badge[];
  variant: 'progress' | 'completed';
}

const BadgeProgress: React.FC<BadgeProgressProps> = ({ title, badges, variant }) => {
  const bgColor = variant === 'progress' ? 'bg-gradient-to-br from-purple-500 to-purple-600' : 'bg-gradient-to-br from-gray-800 to-gray-900';
  
  return (
    <div className={`${bgColor} rounded-xl p-4 text-white`}>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="text-sm opacity-80">{badges.length}</span>
      </div>
      
      <div className="grid grid-cols-4 gap-4">
        {badges.slice(0, 4).map((badge) => (
          <div key={badge.id} className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm p-3 flex items-center justify-center mb-2 shadow-lg transform hover:scale-105 transition-all">
              {badge.icon}
            </div>
            {variant === 'completed' && (
              <div className="w-2 h-2 rounded-full bg-green-400 shadow-lg" />
            )}
          </div>
        ))}
      </div>
      
      <button className="mt-6 text-sm text-white/80 hover:text-white transition-colors">
        {badges.length > 4 ? 'more' : 'View all'}
      </button>
    </div>
  );
};

export default BadgeProgress;