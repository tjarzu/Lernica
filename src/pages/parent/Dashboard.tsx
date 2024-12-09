import React from 'react';
import BehaviorSummary from '../../components/parent/dashboard/BehaviorSummary';
import EmotionalCheckIn from '../../components/parent/dashboard/EmotionalCheckIn';
import EmotionalInsights from '../../components/parent/dashboard/EmotionalInsights';
import FamilyEngagement from '../../components/parent/dashboard/FamilyEngagement';
import FinancialLiteracy from '../../components/parent/dashboard/FinancialLiteracy';
import EngagementMetrics from '../../components/parent/dashboard/EngagementMetrics';

const Dashboard: React.FC = () => {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Parent Dashboard</h1>
        <p className="text-gray-600">Track your child's progress and stay connected</p>
      </div>

      <div className="mb-8">
        <EmotionalCheckIn onPointsEarned={(points) => console.log('Points earned:', points)} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <EmotionalInsights />
        <FamilyEngagement />
      </div>

      <div className="grid grid-cols-1 gap-6 mb-6">
        <FinancialLiteracy />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <EngagementMetrics />
      </div>
    </div>
  );
};

export default Dashboard;