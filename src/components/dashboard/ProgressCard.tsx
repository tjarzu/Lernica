import React from 'react';
import { TrendingUp } from 'lucide-react';

interface ProgressCardProps {
  title: string;
  value: number;
  change: number;
  period: string;
}

const ProgressCard: React.FC<ProgressCardProps> = ({ title, value, change, period }) => {
  return (
    <div className="bg-blue-500 text-white rounded-xl p-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium opacity-80">{title}</h3>
          <div className="mt-4 flex items-baseline">
            <p className="text-4xl font-semibold">{value}</p>
            <span className="ml-2 text-sm opacity-80">points</span>
          </div>
        </div>
        <div className="flex items-center bg-blue-400 rounded-lg px-2 py-1">
          <TrendingUp className="h-4 w-4 mr-1" />
          <span className="text-sm">{change}%</span>
        </div>
      </div>
      <div className="mt-4">
        <div className="h-2 bg-blue-400 rounded-full">
          <div
            className="h-2 bg-white rounded-full"
            style={{ width: `${Math.min(change, 100)}%` }}
          />
        </div>
        <p className="mt-2 text-sm opacity-80">{period}</p>
      </div>
    </div>
  );
};

export default ProgressCard;