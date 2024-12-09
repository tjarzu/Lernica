import React from 'react';

interface StudentData {
  name: string;
  avatar: string;
}

const students: StudentData[] = [
  { name: 'Alex', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex' },
  { name: 'Chris', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Chris' },
  { name: 'Kelly', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kelly' },
  { name: 'Simon', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Simon' },
  { name: 'Eren', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Eren' },
];

const burnoutPercent = 35; // You can make this dynamic based on your data

const ClassroomAnalytics: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Attendance Card */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgzMCkiPjxwYXRoIGQ9Ik0tMTAgMTBsMjAgLTIwTTAgMGwyMCAtMjBNMTAgMTBsMjAgLTIwIiBzdHJva2U9IiNmZmZmZmYxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')] opacity-10"></div>
          <div className="relative z-10">
          <div className="relative flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Parent Engagement</h3>
            <span className="text-sm bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">This Week</span>
          </div>
          <div className="text-4xl font-bold mb-4">85%</div>
          <div className="text-sm opacity-80 mb-4">Parent Response Rate</div>
          <div className="flex -space-x-2">
            {students.map((student, index) => (
              <img
                key={index}
                src={student.avatar}
                alt={student.name}
                className="w-8 h-8 rounded-full border-2 border-white hover:scale-110 transition-transform"
              />
            ))}
            <div className="w-8 h-8 rounded-full bg-white/10 border-2 border-white flex items-center justify-center text-sm">
              +12
            </div>
          </div>
          <div className="mt-4 text-sm opacity-80">
            <span className="text-green-300">↑ 15%</span> increase from last week
          </div>
          </div>
        </div>

        {/* Teacher Burnout */}
        <div className={`bg-gradient-to-br ${
          burnoutPercent < 40 ? 'from-emerald-500 to-emerald-600' :
          burnoutPercent < 65 ? 'from-amber-500 to-amber-600' :
          'from-rose-500 to-rose-600'
        } rounded-xl p-6 text-white shadow-lg relative overflow-hidden`}>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgzMCkiPjxwYXRoIGQ9Ik0tMTAgMTBsMjAgLTIwTTAgMGwyMCAtMjBNMTAgMTBsMjAgLTIwIiBzdHJva2U9IiNmZmZmZmYxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')] opacity-10"></div>
          <div className="relative z-10">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">My Burnout</h3>
            <span className="text-sm bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
              {burnoutPercent < 40 ? 'Low Risk' :
               burnoutPercent < 65 ? 'Medium Risk' :
               'High Risk'}
            </span>
          </div>
          <div className="text-4xl font-bold mb-4">35<span className="text-2xl">%</span></div>
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span className="opacity-80">Last week</span>
              <span className="font-medium">42%</span>
            </div>
            <div className="h-2 bg-white/20 rounded-full">
              <div className="h-2 bg-white/90 rounded-full shadow-inner" style={{ width: '35%' }} />
            </div>
            <p className="text-sm opacity-80">
              {burnoutPercent < 40 ? 'Great job managing your stress levels!' :
               burnoutPercent < 65 ? 'Consider taking regular breaks to maintain balance.' :
               'Consider taking a break or consulting with support staff'}
            </p>
          </div>
          </div>
        </div>

        {/* Student Behavior */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Student's emotions this week</h3>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <div className="flex items-baseline">
                <div className="text-3xl font-bold text-rose-600">8</div>
                <div className="ml-2 text-sm text-gray-500">students</div>
              </div>
              <div className="text-sm text-rose-600 mt-1">High Risk</div>
            </div>
            <div>
              <div className="flex items-baseline">
                <div className="text-3xl font-bold text-amber-600">0</div>
                <div className="ml-2 text-sm text-gray-500">students</div>
              </div>
              <div className="text-sm text-amber-600 mt-1">Medium Risk</div>
            </div>
          </div>
          <div className="relative">
            <div className="space-y-3">
              {[
                { label: 'Read', value: 85 },
                { label: 'Write', value: 72 },
                { label: 'Listen', value: 90 },
                { label: 'Reply', value: 65 },
                { label: 'Stand up', value: 45 }
              ].map((item, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600 font-medium">
                      {item.label === 'Read' ? 'Happy' :
                       item.label === 'Write' ? 'Excited' :
                       item.label === 'Listen' ? 'Stressed' :
                       item.label === 'Reply' ? 'Depressed' :
                       'Burnout'}
                    </span>
                    <span className="text-gray-700">{item.value}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        item.label === 'Read' ? 'bg-gradient-to-r from-amber-400 to-amber-500' :
                        item.label === 'Write' ? 'bg-gradient-to-r from-fuchsia-400 to-fuchsia-500' :
                        item.label === 'Listen' ? 'bg-gradient-to-r from-orange-500 to-orange-600' :
                        item.label === 'Reply' ? 'bg-gradient-to-r from-sky-400 to-sky-500' :
                        'bg-gradient-to-r from-rose-400 to-rose-500'
                      }`}
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 border-t pt-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Students' emotions today</h4>
            <div className="grid grid-cols-5 gap-4">
              {[
                { emoji: '🌟', label: 'Happy', count: 31 },
                { emoji: '⭐', label: 'Excited', count: 18 },
                { emoji: '😰', label: 'Stressed', count: 3 },
                { emoji: '💧', label: 'Depressed', count: 1 },
                { emoji: '🔥', label: 'Burnout', count: 0 },
              ].map((emotion, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-lg mb-1">
                    {emotion.emoji}
                  </div>
                  <span className="text-xs text-gray-600">{emotion.label}</span>
                  <span className="text-sm font-medium text-gray-700">{emotion.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Analytics Recommendations */}
        <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgzMCkiPjxwYXRoIGQ9Ik0tMTAgMTBsMjAgLTIwTTAgMGwyMCAtMjBNMTAgMTBsMjAgLTIwIiBzdHJva2U9IiNmZmZmZmYxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')] opacity-10"></div>
          <div className="relative z-10">
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center backdrop-blur-sm">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold">AI Insights & Recommendations</h3>
          </div>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300">
              <h4 className="font-medium mb-2">Student Well-being Alert</h4>
              <p className="text-sm opacity-90">3 students showing signs of increased stress. Consider scheduling one-on-one check-ins.</p>
              <div className="mt-3 flex items-center text-xs">
                <div className="bg-amber-400/10 text-amber-100 px-2 py-1 rounded-full border border-amber-400/20">Priority: High</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300">
              <h4 className="font-medium mb-2">Parent Engagement Opportunity</h4>
              <p className="text-sm opacity-90">Parent engagement up by 15% this week. Schedule a group session to maintain momentum.</p>
              <div className="mt-3 flex items-center text-xs">
                <div className="bg-emerald-400/10 text-emerald-100 px-2 py-1 rounded-full border border-emerald-400/20">Trending Up</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300">
              <h4 className="font-medium mb-2">Burnout Prevention</h4>
              <p className="text-sm opacity-90">Your current workload pattern suggests scheduling a break in the next 2 weeks.</p>
              <div className="mt-3 flex items-center text-xs">
                <div className="bg-sky-400/10 text-sky-100 px-2 py-1 rounded-full border border-sky-400/20">Predictive Alert</div>
              </div>
            </div>
          </div>
          </div>
        </div>
    </div>
  );
};

export default ClassroomAnalytics;