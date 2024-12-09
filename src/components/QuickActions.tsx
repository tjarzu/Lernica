import React, { useState } from 'react';
import { Plus, AlertTriangle, ThumbsUp, Users, Target, MessageSquare } from 'lucide-react';
import BehaviorIncidentModal from './modals/BehaviorIncidentModal';
import PositiveBehaviorModal from './modals/PositiveBehaviorModal';
import ScheduleMeetingModal from './modals/ScheduleMeetingModal';
import AdminFeedbackModal from './modals/AdminFeedbackModal';
import LearningGoalModal from './modals/LearningGoalModal';

interface QuickAction {
  icon: React.ReactNode;
  label: string;
  description: string;
  color: string;
  action: () => void;
}

const QuickActions: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showIncidentModal, setShowIncidentModal] = useState(false);
  const [showPositiveModal, setShowPositiveModal] = useState(false);
  const [showMeetingModal, setShowMeetingModal] = useState(false);
  const [showAdminFeedbackModal, setShowAdminFeedbackModal] = useState(false);
  const [showLearningGoalModal, setShowLearningGoalModal] = useState(false);

  const actions: QuickAction[] = [
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      label: 'Log Behavior Incident',
      description: 'Record student behavior concerns',
      color: 'from-red-500 to-red-600',
      action: () => setShowIncidentModal(true)
    },
    {
      icon: <ThumbsUp className="w-5 h-5" />,
      label: 'Positive Behavior',
      description: 'Recognize student achievements',
      color: 'from-green-500 to-green-600',
      action: () => setShowPositiveModal(true)
    },
    {
      icon: <Users className="w-5 h-5" />,
      label: 'Schedule Meeting',
      description: 'Set up parent-teacher conference',
      color: 'from-blue-500 to-blue-600',
      action: () => setShowMeetingModal(true)
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      label: 'Admin Feedback',
      description: 'Send feedback to administration',
      color: 'from-purple-500 to-purple-600',
      action: () => setShowAdminFeedbackModal(true)
    },
    {
      icon: <Target className="w-5 h-5" />,
      label: 'Learning Goal',
      description: 'Create student learning objective',
      color: 'from-amber-500 to-amber-600',
      action: () => setShowLearningGoalModal(true)
    }
  ];

  return (
    <div className="fixed right-4 md:right-6 bottom-20 md:bottom-6 z-40">
      <div className="relative">
        {isOpen && (
          <div className="absolute bottom-16 right-0 w-72 max-w-[calc(100vw-2rem)] bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
            {actions.map((action, index) => (
              <button
                key={index}
                onClick={() => {
                  action.action();
                  setIsOpen(false);
                }}
                className="w-full px-4 py-3 flex items-start space-x-3 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div className={`p-2 rounded-lg bg-gradient-to-br ${action.color} text-white`}>
                  {action.icon}
                </div>
                <div className="text-left">
                  <div className="font-medium text-gray-900">{action.label}</div>
                  <div className="text-sm text-gray-500">{action.description}</div>
                </div>
              </button>
            ))}
          </div>
        )}
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center cursor-pointer z-50"
        >
          <Plus className="w-6 h-6" />
        </button>
      </div>
      <BehaviorIncidentModal 
        isOpen={showIncidentModal}
        onClose={() => setShowIncidentModal(false)}
      />
      <PositiveBehaviorModal
        isOpen={showPositiveModal}
        onClose={() => setShowPositiveModal(false)}
      />
      <ScheduleMeetingModal
        isOpen={showMeetingModal}
        onClose={() => setShowMeetingModal(false)}
      />
      <AdminFeedbackModal
        isOpen={showAdminFeedbackModal}
        onClose={() => setShowAdminFeedbackModal(false)}
      />
      <LearningGoalModal
        isOpen={showLearningGoalModal}
        onClose={() => setShowLearningGoalModal(false)}
      />
    </div>
  );
};

export default QuickActions;