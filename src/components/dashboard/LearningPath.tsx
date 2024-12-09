import React from 'react';
import { BookOpen, ChevronRight } from 'lucide-react';

interface LearningPathProps {
  title: string;
  level: string;
  description: string;
  progress: number;
  icon?: string;
}

const LearningPath: React.FC<LearningPathProps> = ({
  title,
  level,
  description,
  progress,
  icon,
}) => {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              {icon ? (
                <img src={icon} alt={title} className="w-6 h-6" />
              ) : (
                <BookOpen className="w-6 h-6 text-blue-600" />
              )}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{title}</h3>
              <p className="text-sm text-gray-500">{level}</p>
            </div>
          </div>
          <p className="mt-2 text-sm text-gray-600">{description}</p>
        </div>
        <ChevronRight className="w-5 h-5 text-gray-400" />
      </div>
      
      <div className="mt-4">
        <div className="h-2 bg-gray-100 rounded-full">
          <div
            className="h-2 bg-blue-600 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default LearningPath;