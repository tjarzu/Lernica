import React, { useState, useEffect } from 'react';
import { Search, Send, Phone, Video, MoreVertical, Users, Star, Clock, ChevronLeft } from 'lucide-react';

const Chat: React.FC = () => {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [messageInput, setMessageInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ... rest of the Chat component implementation
  return (
    <div className="flex h-[calc(100vh-4rem)] bg-gray-50 relative">
      {/* ... existing Chat component JSX */}
    </div>
  );
};

export default Chat;