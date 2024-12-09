import React from 'react';

interface EngagementNotificationProps {
  message: string;
  points: number;
  onClose: () => void;
}

const EngagementNotification: React.FC<EngagementNotificationProps> = ({ message, points, onClose }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-20 md:bottom-4 left-4 right-4 md:left-auto md:right-4 bg-white rounded-xl p-4 shadow-2xl transform animate-slide-up z-50 max-w-[calc(100vw-2rem)] md:max-w-md mx-auto md:mx-0 mb-16 md:mb-0">
      <div className="text-center">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full mx-auto flex items-center justify-center mb-2 md:mb-3">
          <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
          </svg>
        </div>
        <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 md:mb-2">Teacher Engagement!</h3>
        <p className="text-sm md:text-base text-gray-600 mb-1 md:mb-2">{message}</p>
        <p className="text-sm font-medium text-indigo-600">+{points} points earned!</p>
      </div>
    </div>
  );
}

export default EngagementNotification;