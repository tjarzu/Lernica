import React, { useState, useEffect, useRef } from 'react';
import { Plus, Target, BookOpen, Users2, X, FileText } from 'lucide-react';

interface Goal {
  title: string;
  description: string;
  customReward: string;
  sharedWithChild: boolean;
  sharedWithCoParent: boolean;
  pointsReward: number;
  dueDate: string;
  childId: string;
}

interface Note {
  title: string;
  content: string;
  childId: string;
  videoLink?: string;
  webLink?: string;
}

const FloatingActionButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showGoalModal, setShowGoalModal] = useState(false);
  const [showNoteModal, setShowNoteModal] = useState(false);
  const [goal, setGoal] = useState<Goal>({
    title: '',
    description: '',
    customReward: '',
    sharedWithChild: true,
    sharedWithCoParent: false,
    pointsReward: 50,
    dueDate: '',
    childId: ''
  });
  const [note, setNote] = useState<Note>({
    title: '',
    content: '',
    childId: '',
    videoLink: '',
    webLink: ''
  });
  const [isCoParenting, setIsCoParenting] = useState(false);
  const [selectedChild, setSelectedChild] = useState('');
  const fabRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (fabRef.current && !fabRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const children = [
    { id: '1', name: 'Alex Johnson', grade: 'Grade 9' },
    { id: '2', name: 'Emma Johnson', grade: 'Grade 7' }
  ];

  return (
    <>
      <div ref={fabRef} className="fixed right-4 bottom-20 md:bottom-6 z-40">
        <div className="relative">
          {isOpen && (
            <div className="absolute bottom-16 right-0 w-72 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
              <button
                onClick={() => setShowGoalModal(true)}
                className="w-full px-4 py-3 flex items-start space-x-3 hover:bg-gray-50 transition-colors"
              >
                <div className="p-2 rounded-lg bg-gradient-to-br from-green-500 to-green-600 text-white">
                  <Target className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="font-medium text-gray-900">Set Learning Goal</div>
                  <div className="text-sm text-gray-500">Create goals and rewards</div>
                </div>
              </button>

              <button
                onClick={() => setShowNoteModal(true)}
                className="w-full px-4 py-3 flex items-start space-x-3 hover:bg-gray-50 transition-colors"
              >
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="font-medium text-gray-900">Add Note</div>
                  <div className="text-sm text-gray-500">Create notes with resources</div>
                </div>
              </button>

              <button
                onClick={() => setIsCoParenting(!isCoParenting)}
                className="w-full px-4 py-3 flex items-start space-x-3 hover:bg-gray-50 transition-colors"
              >
                <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                  <Users2 className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="font-medium text-gray-900">Co-Parenting Mode</div>
                  <div className="text-sm text-gray-500">
                    {isCoParenting ? 'Disable' : 'Enable'} co-parenting features
                  </div>
                </div>
              </button>
            </div>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-14 h-14 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {showGoalModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-lg h-[80vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Set Learning Goal</h3>
                <button
                  onClick={() => setShowGoalModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <form className="p-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Select Child</label>
                <select
                  value={selectedChild}
                  onChange={(e) => setSelectedChild(e.target.value)}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="">Select a child</option>
                  {children.map(child => (
                    <option key={child.id} value={child.id}>
                      {child.name} ({child.grade})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Goal Title</label>
                <input
                  type="text"
                  value={goal.title}
                  onChange={(e) => setGoal({ ...goal, title: e.target.value })}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="e.g., Complete Math Chapter 1"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Description</label>
                <textarea
                  value={goal.description}
                  onChange={(e) => setGoal({ ...goal, description: e.target.value })}
                  rows={3}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Describe the goal and success criteria..."
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Points Reward</label>
                <select
                  value={goal.pointsReward}
                  onChange={(e) => setGoal({ ...goal, pointsReward: parseInt(e.target.value) })}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  {[25, 50, 75, 100, 150, 200].map(points => (
                    <option key={points} value={points}>{points} points</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Custom Reward (Optional)</label>
                <input
                  type="text"
                  value={goal.customReward}
                  onChange={(e) => setGoal({ ...goal, customReward: e.target.value })}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="e.g., Movie night, Extra playtime"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Due Date</label>
                <input
                  type="date"
                  value={goal.dueDate}
                  onChange={(e) => setGoal({ ...goal, dueDate: e.target.value })}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="shareWithChild"
                    checked={goal.sharedWithChild}
                    onChange={(e) => setGoal({ ...goal, sharedWithChild: e.target.checked })}
                    className="rounded text-green-600 focus:ring-green-500"
                  />
                  <label htmlFor="shareWithChild" className="text-sm text-gray-700">
                    Share goal with child
                  </label>
                </div>
                {isCoParenting && (
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="shareWithCoParent"
                      checked={goal.sharedWithCoParent}
                      onChange={(e) => setGoal({ ...goal, sharedWithCoParent: e.target.checked })}
                      className="rounded text-green-600 focus:ring-green-500"
                    />
                    <label htmlFor="shareWithCoParent" className="text-sm text-gray-700">
                      Share goal with co-parent
                    </label>
                  </div>
                )}
              </div>

              <div className="flex justify-end space-x-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowGoalModal(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Set Goal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showNoteModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-lg h-[80vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Add Note</h3>
                <button
                  onClick={() => setShowNoteModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <form className="p-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Select Child</label>
                <select
                  value={selectedChild}
                  onChange={(e) => setSelectedChild(e.target.value)}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select a child</option>
                  {children.map(child => (
                    <option key={child.id} value={child.id}>
                      {child.name} ({child.grade})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  value={note.title}
                  onChange={(e) => setNote({ ...note, title: e.target.value })}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Note title..."
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Content</label>
                <textarea
                  value={note.content}
                  onChange={(e) => setNote({ ...note, content: e.target.value })}
                  rows={4}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Write your note..."
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Video Link (Optional)</label>
                <input
                  type="url"
                  value={note.videoLink}
                  onChange={(e) => setNote({ ...note, videoLink: e.target.value })}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="e.g., YouTube or educational video link"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Web Resource Link (Optional)</label>
                <input
                  type="url"
                  value={note.webLink}
                  onChange={(e) => setNote({ ...note, webLink: e.target.value })}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="e.g., Educational website or resource"
                />
              </div>

              <div className="flex justify-end space-x-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowNoteModal(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Add Note
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingActionButton;