import React from 'react';
import { Brain, Sparkles } from 'lucide-react';

interface Recommendation {
  title: string;
  description: string;
  type: string;
  relevance: string;
  tags: string[];
}

const AIRecommendations: React.FC = () => {
  const recommendations: Recommendation[] = [
    {
      title: 'Interactive Math Worksheets',
      description: 'Based on your recent algebra lessons, these worksheets could help reinforce key concepts.',
      type: 'Worksheet',
      relevance: 'Matches your current curriculum',
      tags: ['Algebra', 'Interactive', 'Grade 9']
    },
    {
      title: 'Science Lab Activities',
      description: 'Aligns with your upcoming physics unit on motion and forces.',
      type: 'Lab Activity',
      relevance: 'Trending among physics teachers',
      tags: ['Physics', 'Hands-on', 'Grade 10']
    }
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-6 text-white">
      <div className="flex items-center space-x-2 mb-6">
        <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
          <Brain className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-lg font-semibold">AI-Powered Recommendations</h3>
      </div>

      <div className="space-y-4">
        {recommendations.map((rec, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/20 transition-colors cursor-pointer"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <h4 className="font-medium flex items-center">
                  {rec.title}
                  <Sparkles className="w-4 h-4 ml-2 text-yellow-300" />
                </h4>
                <p className="text-sm text-white/80">{rec.description}</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-3">
              <div className="flex flex-wrap gap-2">
                {rec.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-white/5 rounded-full text-xs border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                {rec.relevance}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIRecommendations;