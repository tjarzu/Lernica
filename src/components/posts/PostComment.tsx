import React from 'react';
import { Heart, MessageCircle } from 'lucide-react';

interface Comment {
  id: string;
  author: {
    name: string;
    avatar: string;
    role: 'teacher' | 'parent' | 'student';
  };
  content: string;
  timestamp: string;
  likes: number;
  isLiked: boolean;
}

interface PostCommentProps {
  comment: Comment;
  onLike: (id: string) => void;
}

const PostComment: React.FC<PostCommentProps> = ({ comment, onLike }) => {
  return (
    <div className="flex space-x-3 p-4 bg-gray-50 rounded-lg">
      <img
        src={comment.author.avatar}
        alt={comment.author.name}
        className="w-8 h-8 rounded-full"
      />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-medium text-gray-900">{comment.author.name}</span>
            <span className="mx-2 text-gray-300">•</span>
            <span className="text-sm text-gray-500">{comment.timestamp}</span>
          </div>
          <button
            onClick={() => onLike(comment.id)}
            className={`flex items-center space-x-1 text-sm ${
              comment.isLiked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
            }`}
          >
            <Heart className="w-4 h-4" fill={comment.isLiked ? 'currentColor' : 'none'} />
            <span>{comment.likes}</span>
          </button>
        </div>
        <p className="mt-1 text-gray-700">{comment.content}</p>
      </div>
    </div>
  );
};

export default PostComment;