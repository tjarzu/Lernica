import React from 'react';
import { MessageCircle, Clock, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Message {
  id: string;
  parent: {
    name: string;
    avatar: string;
  };
  student: {
    name: string;
    grade: string;
  };
  message: string;
  time: string;
  urgent: boolean;
}

const messages: Message[] = [
  {
    id: '1',
    parent: {
      name: 'Sarah Johnson',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
    },
    student: {
      name: 'Mike Johnson',
      grade: 'Grade 9'
    },
    message: "Mike's been struggling with the recent math assignments. Could we schedule a meeting?",
    time: '10 mins ago',
    urgent: true
  },
  {
    id: '2',
    parent: {
      name: 'David Chen',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David'
    },
    student: {
      name: 'Lisa Chen',
      grade: 'Grade 8'
    },
    message: "Lisa will be absent tomorrow due to a doctor's appointment.",
    time: '1 hour ago',
    urgent: false
  },
  {
    id: '3',
    parent: {
      name: 'Maria Garcia',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria'
    },
    student: {
      name: 'Carlos Garcia',
      grade: 'Grade 7'
    },
    message: "Carlos mentioned feeling overwhelmed with the project deadline.",
    time: '2 hours ago',
    urgent: true
  }
];

const ParentMessages: React.FC = () => {
  const navigate = useNavigate();

  const handleViewAllMessages = () => {
    navigate('/chat');
  };

  const handleMessageClick = (parentId: string) => {
    navigate('/chat', { state: { selectedParent: parentId } });
  };

  return (
    <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm h-full">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <MessageCircle className="w-5 h-5 text-gray-700" />
          <h3 className="text-lg font-semibold text-gray-900">Parent Messages</h3>
        </div>
        <span className="text-sm bg-red-100 text-red-600 px-3 py-1 rounded-full">
          {messages.filter(m => m.urgent).length} urgent
        </span>
      </div>

      <div className="space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            onClick={() => handleMessageClick(message.id)}
            className={`bg-gray-50 rounded-lg p-4 border cursor-pointer hover:bg-gray-100 transition-colors ${
              message.urgent ? 'border-red-200' : 'border-gray-200'
            }`}
          >
            <div className="flex items-start space-x-3">
              <img
                src={message.parent.avatar}
                alt={message.parent.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium truncate text-gray-900">{message.parent.name}</h4>
                  <div className="flex items-center space-x-2">
                    {message.urgent && (
                      <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full">
                        Urgent
                      </span>
                    )}
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="w-3 h-3 mr-1" />
                      {message.time}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Re: {message.student.name} ({message.student.grade})
                </p>
                <p className="text-sm mt-2 text-gray-700">{message.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button 
        onClick={handleViewAllMessages}
        className="w-full mt-4 py-2 text-sm text-gray-600 hover:text-gray-900 flex items-center justify-center space-x-1 transition-colors"
      >
        <span>View all messages</span>
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default ParentMessages;