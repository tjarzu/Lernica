import React from 'react';
import { Brain, TrendingUp, AlertTriangle, MessageSquare } from 'lucide-react';

const AIPredictions: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgzMCkiPjxwYXRoIGQ9Ik0tMTAgMTBsMjAgLTIwTTAgMGwyMCAtMjBNMTAgMTBsMjAgLTIwIiBzdHJva2U9IiNmZmZmZmYxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')] opacity-10"></div>
      <div className="relative z-10">
        <div className="flex items-center space-x-2 mb-6">
          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center backdrop-blur-sm">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-lg font-semibold">AI Insights & Predictions</h3>
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

          <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300">
            <h4 className="font-medium mb-2">Learning Pattern Detected</h4>
            <p className="text-sm opacity-90">Students perform 25% better in morning sessions. Consider rescheduling key topics.</p>
            <div className="mt-3 flex items-center text-xs">
              <div className="bg-violet-400/10 text-violet-100 px-2 py-1 rounded-full border border-violet-400/20">Data Insight</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPredictions;