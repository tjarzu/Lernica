import React from 'react';
import { X, Clock, Users, BookOpen, CheckCircle, Link, Download } from 'lucide-react';

interface Resource {
  name: string;
  type: 'pdf' | 'link' | 'worksheet';
  url: string;
}

interface LessonPlanDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  lesson: {
    title: string;
    time: string;
    duration: string;
    grade: string;
    description: string;
    objectives: string[];
    activities: {
      name: string;
      duration: string;
      description: string;
    }[];
    resources: Resource[];
  };
}

const LessonPlanDetails: React.FC<LessonPlanDetailsProps> = ({ isOpen, onClose, lesson }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50">
      <div className="absolute right-0 top-0 h-full w-[600px] bg-white shadow-2xl">
        <div className="h-full overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">{lesson.title}</h2>
              <div className="flex items-center space-x-4 mt-1">
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-1" />
                  {lesson.time}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-1" />
                  {lesson.grade}
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Content */}
          <div className="px-6 py-4 space-y-6">
            {/* Description */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-2">Description</h3>
              <p className="text-gray-600">{lesson.description}</p>
            </div>

            {/* Learning Objectives */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Learning Objectives</h3>
              <div className="space-y-2">
                {lesson.objectives.map((objective, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{objective}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Activities Timeline */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Lesson Timeline</h3>
              <div className="relative space-y-4">
                {lesson.activities.map((activity, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex flex-col items-center mr-4">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-sm font-medium text-blue-600">
                          {index + 1}
                        </span>
                      </div>
                      {index < lesson.activities.length - 1 && (
                        <div className="w-0.5 h-full bg-blue-100 mt-2" />
                      )}
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{activity.name}</h4>
                        <span className="text-sm text-gray-500">{activity.duration}</span>
                      </div>
                      <p className="text-sm text-gray-600">{activity.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Resources</h3>
              <div className="grid grid-cols-2 gap-4">
                {lesson.resources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center mr-3">
                      {resource.type === 'pdf' ? (
                        <BookOpen className="w-5 h-5 text-red-500" />
                      ) : resource.type === 'link' ? (
                        <Link className="w-5 h-5 text-blue-500" />
                      ) : (
                        <Download className="w-5 h-5 text-green-500" />
                      )}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                        {resource.name}
                      </div>
                      <div className="text-xs text-gray-500 capitalize">{resource.type}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonPlanDetails;