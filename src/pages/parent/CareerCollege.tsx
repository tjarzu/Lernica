import React, { useState } from 'react';
import { Briefcase, GraduationCap, Target, PiggyBank, BookOpen, TrendingUp, Star, Calendar, Plus, Brain } from 'lucide-react';
import ResourceMatching from '../../components/parent/career/ResourceMatching';

interface Child {
  id: string;
  name: string;
  grade: string;
  avatar: string;
  careerPath?: {
    title: string;
    description: string;
    requirements: string[];
    skills: string[];
    timeline: {
      year: string;
      goals: string[];
    }[];
  };
  collegePath?: {
    school: string;
    major: string;
    requirements: {
      academic: string[];
      extracurricular: string[];
    };
    financialPlan: {
      tuition: number;
      savings: number;
      scholarships: string[];
    };
  };
}

const CareerCollege: React.FC = () => {
  const [selectedChild, setSelectedChild] = useState<string>('1');
  const [showSkillGoalModal, setShowSkillGoalModal] = useState(false);
  const [showFinancialGoalModal, setShowFinancialGoalModal] = useState(false);
  const [skillGoal, setSkillGoal] = useState({
    title: '',
    description: '',
    targetDate: '',
    milestones: ['']
  });
  const [financialGoal, setFinancialGoal] = useState({
    title: '',
    amount: '',
    deadline: '',
    frequency: 'monthly',
    source: ''
  });

  const children: Child[] = [
    {
      id: '1',
      name: 'Alex Johnson',
      grade: 'Grade 9',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
      careerPath: {
        title: 'Software Engineer',
        description: 'Developing software solutions and applications',
        requirements: [
          'Bachelor\'s in Computer Science',
          'Programming skills',
          'Problem-solving abilities'
        ],
        skills: [
          'JavaScript',
          'Python',
          'Algorithms',
          'Team collaboration'
        ],
        timeline: [
          {
            year: '2024',
            goals: [
              'Complete AP Computer Science',
              'Join Coding Club',
              'Start personal coding projects'
            ]
          },
          {
            year: '2025',
            goals: [
              'Participate in coding competitions',
              'Summer coding bootcamp',
              'Build portfolio projects'
            ]
          }
        ]
      },
      collegePath: {
        school: 'Stanford University',
        major: 'Computer Science',
        requirements: {
          academic: [
            'GPA: 3.8+',
            'SAT: 1500+',
            'AP Computer Science A',
            'AP Calculus BC'
          ],
          extracurricular: [
            'Coding Club Leadership',
            'Hackathon Participation',
            'Tech Internship'
          ]
        },
        financialPlan: {
          tuition: 60000,
          savings: 15000,
          scholarships: [
            'Merit Scholarship',
            'STEM Excellence Award',
            'Local Tech Company Grant'
          ]
        }
      }
    }
  ];

  const selectedChildData = children.find(child => child.id === selectedChild);

  return (
    <div className="p-8">
      {/* Child Selector */}
      <div className="flex items-center space-x-4 mb-8">
        {children.map((child) => (
          <button
            key={child.id}
            onClick={() => setSelectedChild(child.id)}
            className={`flex items-center space-x-3 p-4 rounded-xl transition-all ${
              selectedChild === child.id
                ? 'bg-blue-50 border-2 border-blue-500'
                : 'bg-white border-2 border-transparent hover:border-blue-200'
            }`}
          >
            <img
              src={child.avatar}
              alt={child.name}
              className="w-12 h-12 rounded-full"
            />
            <div className="text-left">
              <h3 className="font-medium text-gray-900">{child.name}</h3>
              <p className="text-sm text-gray-500">{child.grade}</p>
            </div>
          </button>
        ))}
      </div>

      {selectedChildData && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Career Path */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl text-white">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900">Career Path</h2>
                </div>
                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                  {selectedChildData.careerPath?.title}
                </span>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Description</h3>
                <p className="text-gray-600">{selectedChildData.careerPath?.description}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Requirements</h3>
                <div className="space-y-2">
                  {selectedChildData.careerPath?.requirements.map((req, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Target className="w-4 h-4 text-purple-500" />
                      <span className="text-gray-600">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Skills to Develop</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedChildData.careerPath?.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Timeline</h3>
                <div className="space-y-4">
                  {selectedChildData.careerPath?.timeline.map((period, index) => (
                    <div key={index} className="relative">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="p-1 bg-purple-100 rounded-lg">
                          <Calendar className="w-4 h-4 text-purple-600" />
                        </div>
                        <span className="font-medium text-gray-900">{period.year}</span>
                      </div>
                      <div className="ml-8 space-y-2">
                        {period.goals.map((goal, goalIndex) => (
                          <div key={goalIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-purple-400 rounded-full" />
                            <span className="text-sm text-gray-600">{goal}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* College Path */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl text-white">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900">College Path</h2>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                  {selectedChildData.collegePath?.school}
                </span>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Academic Requirements</h3>
                <div className="space-y-2">
                  {selectedChildData.collegePath?.requirements.academic.map((req, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <BookOpen className="w-4 h-4 text-blue-500" />
                      <span className="text-gray-600">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Extracurricular Activities</h3>
                <div className="space-y-2">
                  {selectedChildData.collegePath?.requirements.extracurricular.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-blue-500" />
                      <span className="text-gray-600">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Financial Planning</h3>
                <div className="bg-blue-50 rounded-xl p-4">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-gray-600">Annual Tuition</div>
                      <div className="text-lg font-semibold text-gray-900">
                        ${selectedChildData.collegePath?.financialPlan.tuition.toLocaleString()}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Current Savings</div>
                      <div className="text-lg font-semibold text-gray-900">
                        ${selectedChildData.collegePath?.financialPlan.savings.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900 mb-2">Target Scholarships</div>
                    <div className="space-y-2">
                      {selectedChildData.collegePath?.financialPlan.scholarships.map((scholarship, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <PiggyBank className="w-4 h-4 text-blue-500" />
                          <span className="text-sm text-gray-600">{scholarship}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 text-white">
                <div className="flex items-center space-x-2 mb-3">
                  <TrendingUp className="w-5 h-5" />
                  <h3 className="font-medium">Progress Tracking</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Academic Progress</span>
                      <span>75%</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full">
                      <div className="h-full bg-white rounded-full" style={{ width: '75%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Financial Progress</span>
                      <span>25%</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full">
                      <div className="h-full bg-white rounded-full" style={{ width: '25%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Skills & Financial Goals */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Skills Goals */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-br from-green-500 to-green-600 rounded-xl text-white">
                      <Brain className="w-6 h-6" />
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900">Skills Goals</h2>
                  </div>
                  <button
                    onClick={() => setShowSkillGoalModal(true)}
                    className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {[
                    {
                      title: 'Master Python Programming',
                      progress: 65,
                      deadline: '2024-06-30',
                      milestones: [
                        'Complete basic syntax',
                        'Build small projects',
                        'Learn OOP concepts'
                      ]
                    },
                    {
                      title: 'Web Development Fundamentals',
                      progress: 40,
                      deadline: '2024-08-15',
                      milestones: [
                        'Learn HTML/CSS',
                        'JavaScript basics',
                        'Build portfolio'
                      ]
                    }
                  ].map((goal, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-medium text-gray-900">{goal.title}</h3>
                        <span className="text-sm text-gray-500">
                          Due {new Date(goal.deadline).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="space-y-2 mb-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Progress</span>
                          <span className="font-medium text-gray-900">{goal.progress}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div
                            className="h-full bg-green-600 rounded-full"
                            style={{ width: `${goal.progress}%` }}
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        {goal.milestones.map((milestone, i) => (
                          <div key={i} className="flex items-center space-x-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                            <span className="text-gray-600">{milestone}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Financial Goals */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl text-white">
                      <PiggyBank className="w-6 h-6" />
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900">Financial Goals</h2>
                  </div>
                  <button
                    onClick={() => setShowFinancialGoalModal(true)}
                    className="p-2 text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {[
                    {
                      title: 'College Savings',
                      current: 15000,
                      target: 60000,
                      monthly: 500,
                      deadline: '2026-08-01'
                    },
                    {
                      title: 'Summer Program Fund',
                      current: 2000,
                      target: 5000,
                      monthly: 250,
                      deadline: '2024-06-01'
                    }
                  ].map((goal, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-medium text-gray-900">{goal.title}</h3>
                        <span className="text-sm text-gray-500">
                          Due {new Date(goal.deadline).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-3">
                        <div>
                          <div className="text-sm text-gray-600">Current</div>
                          <div className="font-medium text-gray-900">
                            ${goal.current.toLocaleString()}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">Target</div>
                          <div className="font-medium text-gray-900">
                            ${goal.target.toLocaleString()}
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Progress</span>
                          <span className="font-medium text-gray-900">
                            {Math.round((goal.current / goal.target) * 100)}%
                          </span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div
                            className="h-full bg-yellow-600 rounded-full"
                            style={{ width: `${(goal.current / goal.target) * 100}%` }}
                          />
                        </div>
                      </div>
                      <div className="mt-3 text-sm text-gray-600">
                        Monthly contribution: ${goal.monthly}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Resource Matching */}
          <div className="lg:col-span-2">
            <ResourceMatching
              careerTitle={selectedChildData.careerPath?.title}
              collegeMajor={selectedChildData.collegePath?.major}
              skills={selectedChildData.careerPath?.skills || []}
            />
          </div>
        </div>
      )}
      
      {/* Skill Goal Modal */}
      {showSkillGoalModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md h-[60vh] lg:h-auto overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Add Skill Goal</h3>
            </div>
            <form className="p-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Goal Title</label>
                <input
                  type="text"
                  value={skillGoal.title}
                  onChange={(e) => setSkillGoal({ ...skillGoal, title: e.target.value })}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="e.g., Learn Python Programming"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Description</label>
                <textarea
                  value={skillGoal.description}
                  onChange={(e) => setSkillGoal({ ...skillGoal, description: e.target.value })}
                  rows={3}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Describe the goal and its importance..."
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Target Date</label>
                <input
                  type="date"
                  value={skillGoal.targetDate}
                  onChange={(e) => setSkillGoal({ ...skillGoal, targetDate: e.target.value })}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Milestones</label>
                <div className="space-y-2">
                  {skillGoal.milestones.map((milestone, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={milestone}
                        onChange={(e) => {
                          const newMilestones = [...skillGoal.milestones];
                          newMilestones[index] = e.target.value;
                          setSkillGoal({ ...skillGoal, milestones: newMilestones });
                        }}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder={`Milestone ${index + 1}`}
                      />
                      {skillGoal.milestones.length > 1 && (
                        <button
                          type="button"
                          onClick={() => {
                            setSkillGoal({
                              ...skillGoal,
                              milestones: skillGoal.milestones.filter((_, i) => i !== index)
                            });
                          }}
                          className="text-red-600 hover:text-red-700"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => setSkillGoal({
                      ...skillGoal,
                      milestones: [...skillGoal.milestones, '']
                    })}
                    className="text-green-600 hover:text-green-700"
                  >
                    + Add Milestone
                  </button>
                </div>
              </div>
              <div className="flex justify-end space-x-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowSkillGoalModal(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Add Goal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Financial Goal Modal */}
      {showFinancialGoalModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md h-[60vh] lg:h-auto overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Add Financial Goal</h3>
            </div>
            <form className="p-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Goal Title</label>
                <input
                  type="text"
                  value={financialGoal.title}
                  onChange={(e) => setFinancialGoal({ ...financialGoal, title: e.target.value })}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="e.g., College Savings"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Target Amount</label>
                <input
                  type="number"
                  value={financialGoal.amount}
                  onChange={(e) => setFinancialGoal({ ...financialGoal, amount: e.target.value })}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="Enter amount"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Contribution Frequency</label>
                <select
                  value={financialGoal.frequency}
                  onChange={(e) => setFinancialGoal({ ...financialGoal, frequency: e.target.value })}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                >
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                  <option value="annually">Annually</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Source of Funds</label>
                <input
                  type="text"
                  value={financialGoal.source}
                  onChange={(e) => setFinancialGoal({ ...financialGoal, source: e.target.value })}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="e.g., Savings, Part-time job"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Target Date</label>
                <input
                  type="date"
                  value={financialGoal.deadline}
                  onChange={(e) => setFinancialGoal({ ...financialGoal, deadline: e.target.value })}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
              <div className="flex justify-end space-x-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowFinancialGoalModal(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
                >
                  Add Goal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerCollege;