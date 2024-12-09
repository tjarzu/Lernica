import React from 'react';
import { FileText, Download, Star, Share2, BookOpen } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  description: string;
  type: string;
  subject: string;
  grade: string;
  author: {
    name: string;
    avatar: string;
  };
  rating: number;
  downloads: number;
  tags: string[];
  fileUrl?: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  type,
  subject,
  grade,
  author,
  rating,
  downloads,
  tags,
  fileUrl
}) => {
  return (
    <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow w-full overflow-hidden">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-2 md:space-x-3 flex-1 min-w-0">
          <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
            <FileText className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-gray-900 truncate">{title}</h3>
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
              <span>{type}</span>
              <span>•</span>
              <span>{subject}</span>
              <span>•</span>
              <span>{grade}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center text-yellow-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="ml-1 text-sm">{rating}</span>
          </div>
          <div className="text-sm text-gray-500">
            {downloads} downloads
          </div>
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <div className="flex items-center space-x-2">
          <img
            src={author.avatar}
            alt={author.name}
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm text-gray-600">{author.name}</span>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
          {fileUrl && (
            <button className="p-2 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
              <Download className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;