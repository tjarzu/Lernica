import React from 'react';
import { Trophy, Users, Star, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';

interface Achievement {
  icon: React.ReactNode;
  title: string;
  points: number;
  gradient: string;
}

const TeacherNotifications: React.FC = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [selectedAchievement, setSelectedAchievement] = React.useState(0);

  const achievements: Achievement[] = [
    {
      icon: <Users className="w-5 h-5 text-white" />,
      title: "You engaged 4 parents this week!",
      points: 50,
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <Trophy className="w-5 h-5 text-white" />,
      title: "Perfect attendance record this month",
      points: 100,
      gradient: "from-purple-400 to-purple-600"
    },
    {
      icon: <Star className="w-5 h-5 text-white" />,
      title: "Students showed 25% improvement",
      points: 75,
      gradient: "from-yellow-400 to-yellow-600"
    },
    {
      icon: <BookOpen className="w-5 h-5 text-white" />,
      title: "Created 3 new lesson plans",
      points: 30,
      gradient: "from-green-400 to-green-600"
    }
  ];

  return (
    <div className="bg-white rounded-xl p-3 shadow-lg border border-gray-200 h-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Latest Achievement</h3>
        <div className="relative">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex items-center space-x-1 text-sm"
          >
            <span className="text-sm text-gray-600">More</span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 text-gray-600" />
            ) : (
              <ChevronDown className="w-4 h-4 text-gray-600" />
            )}
          </button>
          {isExpanded && (
            <div className="absolute right-0 top-full mt-2 w-[calc(100vw-2rem)] sm:w-72 max-w-sm bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50 max-h-[60vh] overflow-y-auto">
              {achievements.map((achievement, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedAchievement(index);
                    setIsExpanded(false);
                  }}
                  className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center"
                >
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${achievement.gradient} p-2 flex items-center justify-center`}>
                    {achievement.icon}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{achievement.title}</p>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full flex items-center justify-center">
                        <span className="text-[8px] text-white font-bold">+</span>
                      </div>
                      <span className="text-xs font-medium text-gray-600 ml-1">{achievement.points} points</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div className="p-3 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="flex items-center">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${achievements[selectedAchievement].gradient} p-3 flex items-center justify-center shadow-lg`}>
            {achievements[selectedAchievement].icon}
          </div>
          <div className="ml-4 flex-1">
            <p className="text-base font-medium text-gray-900">{achievements[selectedAchievement].title}</p>
            <div className="flex items-center mt-2">
              <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center shadow">
                <span className="text-xs text-white font-bold">+</span>
              </div>
              <span className="text-sm font-medium text-gray-700 ml-2">{achievements[selectedAchievement].points} points</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherNotifications;