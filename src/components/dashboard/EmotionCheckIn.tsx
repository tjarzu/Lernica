import React, { useState, useEffect } from 'react';

interface Emotion {
  name: string;
  emoji: React.ReactNode;
  color: string;
}

interface EmotionCheckInProps {
  onPointsEarned?: (points: number) => void;
}

const emotions: Emotion[] = [
  {
    name: 'Happy',
    emoji: (
      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-all">
        <span className="text-2xl">🌟</span>
      </div>
    ),
    color: 'from-yellow-400 to-yellow-500'
  },
  {
    name: 'Excited',
    emoji: (
      <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-all">
        <span className="text-2xl">⭐</span>
      </div>
    ),
    color: 'from-pink-400 to-pink-500'
  },
  {
    name: 'Stressed',
    emoji: (
      <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-all">
        <span className="text-2xl">😰</span>
      </div>
    ),
    color: 'from-orange-400 to-orange-500'
  },
  {
    name: 'Burnout',
    emoji: (
      <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-500 rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-all">
        <span className="text-2xl">🔥</span>
      </div>
    ),
    color: 'from-red-400 to-red-500'
  },
  {
    name: 'Depressed',
    emoji: (
      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-all">
        <span className="text-2xl">💧</span>
      </div>
    ),
    color: 'from-blue-400 to-blue-500'
  },
];

const EmotionCheckIn: React.FC<EmotionCheckInProps> = ({ onPointsEarned }) => {
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);
  const [intensity, setIntensity] = useState(5);
  const [timeLeft, setTimeLeft] = useState(120);
  const [points, setPoints] = useState(50);
  const [isExpired, setIsExpired] = useState(false);
  const [showReward, setShowReward] = useState(false);
  const [hasCheckedIn, setHasCheckedIn] = useState(false);

  React.useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (!isExpired) {
      setIsExpired(true);
      setPoints(25);
    }
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSubmit = () => {
    if (!hasCheckedIn) {
      const earnedPoints = isExpired ? 25 : 50;
      onPointsEarned?.(earnedPoints);
      setShowReward(true);
      setHasCheckedIn(true);
      setTimeout(() => setShowReward(false), 3000);
    }
    setSelectedEmotion(null);
    setIntensity(5);
  };

  return (
    <>
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 relative">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <h3 className="text-lg font-semibold text-gray-900">How are you feeling?</h3>
          <div className={`px-2 py-1 ${isExpired ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'} rounded-full text-sm font-medium transition-colors duration-300`}>
            +{points} points
          </div>
        </div>
        <div className="hidden sm:flex items-center space-x-3">
          <span className="text-sm text-gray-500">Daily Check-in</span>
          <div className={`px-3 py-1 ${timeLeft === 0 ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'} rounded-full font-mono text-sm transition-colors duration-300`}>
            {formatTime(timeLeft)}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
        {emotions.map((emotion) => (
          <button
            key={emotion.name}
            onClick={() => setSelectedEmotion(emotion.name)}
            className={`flex flex-col items-center group relative transition-transform cursor-pointer ${
              selectedEmotion === emotion.name ? 'scale-110' : ''
            } transition-all duration-200`}
          >
            {emotion.emoji}
            <span className="mt-3 text-xs sm:text-sm font-medium text-gray-700">{emotion.name}</span>
            {selectedEmotion === emotion.name && (
              <div className="absolute -inset-2 border-2 border-blue-500 rounded-xl opacity-50"></div>
            )}
          </button>
        ))}
      </div>

      {selectedEmotion && (
        <div className="mt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Intensity</span>
            <span className="text-sm text-gray-500">{intensity}/10</span>
          </div>
          <input
            type="range"
            min="1"
            max="10"
            value={intensity}
            onChange={(e) => setIntensity(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
          <div className="flex justify-between mt-6">
            <button 
              onClick={() => {
                setSelectedEmotion(null);
                setIntensity(5);
              }}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button 
              onClick={handleSubmit}
              disabled={hasCheckedIn}
              className={`px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors ${
                hasCheckedIn ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
    {showReward && (
      <div className="fixed inset-0 flex items-center justify-center z-[60]">
        <div className="bg-white rounded-xl p-6 shadow-2xl transform animate-bounce">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mx-auto flex items-center justify-center mb-4">
              <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 15l-2 5l9-13h-4l2-7l-9 13h4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Check-in Complete!</h3>
            <p className="text-gray-600">You earned <span className="font-bold text-yellow-600">+{isExpired ? 25 : 50}</span> points for your daily check-in.</p>
          </div>
        </div>
      </div>
    )}
    </>
  );
};

export default EmotionCheckIn;