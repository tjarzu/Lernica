import React, { useState } from 'react';
import { BookOpen, RefreshCw, Edit, Download, Search, Filter } from 'lucide-react';
import GenerateLessonModal from '../components/modals/GenerateLessonModal';
import EditLessonModal from '../components/modals/EditLessonModal';
import { generateLessonPlanPDF } from '../utils/pdfExport';

interface LessonPlan {
  id: string;
  title: string;
  subject: string;
  grade: string;
  duration: string;
  objectives: string[];
  description: string;
  lastModified: string;
  status: 'draft' | 'ready' | 'completed';
}

const LessonPlans: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [selectedGrade, setSelectedGrade] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [showGenerateModal, setShowGenerateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<LessonPlan | null>(null);

  const subjects = ['Mathematics', 'Science', 'English', 'History', 'Computer Science'];
  const grades = ['Grade 7', 'Grade 8', 'Grade 9', 'Grade 10'];

  const lessonPlans: LessonPlan[] = [
    {
      id: '1',
      title: 'Financial Literacy Basics',
      subject: 'Mathematics',
      grade: 'Grade 9',
      duration: '45 mins',
      objectives: [
        'Understand basic budgeting principles',
        'Learn about saving strategies',
        'Practice real-world financial scenarios'
      ],
      description: 'Introduction to essential financial concepts for teenagers',
      lastModified: '2 hours ago',
      status: 'ready'
    },
    {
      id: '2',
      title: 'Digital Citizenship',
      subject: 'Computer Science',
      grade: 'Grade 8',
      duration: '40 mins',
      objectives: [
        'Understand online safety',
        'Learn about digital footprint',
        'Practice responsible social media use'
      ],
      description: 'Teaching responsible and safe internet usage',
      lastModified: '1 day ago',
      status: 'draft'
    }
  ];

  const handleRegeneratePlan = (planId: string) => {
    // Handle regeneration logic
  };

  const handleEditPlan = (planId: string) => {
    const plan = lessonPlans.find(p => p.id === planId);
    if (plan) {
      setSelectedPlan(plan);
      setShowEditModal(true);
    }
  };

  const handleDownloadPlan = (planId: string) => {
    const plan = lessonPlans.find(p => p.id === planId);
    if (plan) {
      const doc = generateLessonPlanPDF({
        ...plan,
        activities: [
          {
            name: 'Introduction & Discussion',
            duration: '10 mins',
            description: 'Open discussion about the topic'
          },
          {
            name: 'Main Activity',
            duration: '25 mins',
            description: 'Core learning activity'
          },
          {
            name: 'Wrap-up',
            duration: '10 mins',
            description: 'Review and assessment'
          }
        ],
        resources: [
          {
            name: 'Worksheet',
            type: 'PDF',
            url: '#'
          }
        ]
      });
      doc.save(`${plan.title.toLowerCase().replace(/\s+/g, '-')}.pdf`);
    }
  };

  const filteredPlans = lessonPlans.filter(plan => {
    if (selectedSubject !== 'all' && plan.subject !== selectedSubject) return false;
    if (selectedGrade !== 'all' && plan.grade !== selectedGrade) return false;
    if (selectedStatus !== 'all' && plan.status !== selectedStatus) return false;
    if (searchQuery && !plan.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Lesson Plans</h1>
          <p className="text-gray-600">AI-generated lesson plans to streamline your teaching</p>
        </div>
        <button 
          onClick={() => setShowGenerateModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <BookOpen className="w-5 h-5" />
          <span>Generate New Plan</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-gray-200 mb-8">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input 
                type="text"
                placeholder="Search lesson plans..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full lg:w-auto">
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              >
                <option value="all">All Subjects</option>
                {subjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
              <select
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              >
                <option value="all">All Grades</option>
                {grades.map(grade => (
                  <option key={grade} value={grade}>{grade}</option>
                ))}
              </select>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              >
                <option value="all">All Status</option>
                <option value="draft">Draft</option>
                <option value="ready">Ready</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {filteredPlans.map((plan) => (
            <div key={plan.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-lg font-medium text-gray-900">{plan.title}</h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      plan.status === 'draft' ? 'bg-yellow-100 text-yellow-700' :
                      plan.status === 'ready' ? 'bg-green-100 text-green-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {plan.status.charAt(0).toUpperCase() + plan.status.slice(1)}
                    </span>
                  </div>
                  <div className="mt-1 text-sm text-gray-500">
                    {plan.subject} • {plan.grade} • {plan.duration}
                  </div>
                  <p className="mt-2 text-gray-600">{plan.description}</p>
                  <div className="mt-3 space-y-1">
                    {plan.objectives.map((objective, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                        {objective}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleRegeneratePlan(plan.id)}
                    className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    title="Regenerate section"
                  >
                    <RefreshCw className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleEditPlan(plan.id)}
                    className="p-2 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                    title="Edit plan"
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDownloadPlan(plan.id)}
                    className="p-2 text-gray-500 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
                    title="Download plan"
                  >
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                Last modified {plan.lastModified}
              </div>
            </div>
          ))}
        </div>
      </div>
      <GenerateLessonModal 
        isOpen={showGenerateModal}
        onClose={() => setShowGenerateModal(false)}
      />
      <EditLessonModal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        lesson={selectedPlan || undefined}
      />
    </div>
  );
};

export default LessonPlans;