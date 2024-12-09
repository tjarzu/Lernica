import React, { useState } from 'react';
import { Calendar, FileText, Download } from 'lucide-react';
import SignatureListModal from './SignatureListModal';

interface PermissionSlipProps {
  title: string;
  description: string;
  dueDate: string;
  isTeacher?: boolean;
  signatures?: Array<{
    name: string;
    timestamp: string;
    student?: {
      name: string;
      class: string;
    };
  }>;
  downloadUrl?: string;
}

const PermissionSlip: React.FC<PermissionSlipProps> = ({
  title,
  description,
  dueDate,
  isTeacher = false,
  signatures = [],
  downloadUrl
}) => {
  const [signed, setSigned] = useState(false);
  const [signature, setSignature] = useState('');
  const [showSignatures, setShowSignatures] = useState(false);

  const handleSign = (e: React.FormEvent) => {
    e.preventDefault();
    if (signature.trim()) {
      setSigned(true);
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">{title}</h3>
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="w-4 h-4 mr-1" />
              <span>Due: {dueDate}</span>
            </div>
          </div>
        </div>
        {downloadUrl && (
          <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
            <Download className="w-4 h-4" />
            <span className="text-sm">Download</span>
          </button>
        )}
      </div>

      <p className="text-gray-700 mb-6">{description}</p>

      {isTeacher ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>{signatures.length} parent{signatures.length !== 1 ? 's' : ''} signed</span>
            <button 
              onClick={() => setShowSignatures(true)}
              className="text-blue-600 hover:text-blue-700"
            >
              View all signatures
            </button>
          </div>
          {signatures.length > 0 && (
            <div className="flex -space-x-2">
              {signatures.slice(0, 5).map((signature, index) => (
                <div
                  key={index}
                  className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center"
                  title={`Signed by ${signature.name}`}
                >
                  {signature.name.charAt(0)}
                </div>
              ))}
              {signatures.length > 5 && (
                <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-sm text-gray-600">
                  +{signatures.length - 5}
                </div>
              )}
            </div>
          )}
        </div>
      ) : !signed ? (
        <form onSubmit={handleSign} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Parent/Guardian Signature
            </label>
            <input
              type="text"
              value={signature}
              onChange={(e) => setSignature(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Type full name to sign"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Sign Permission Slip
          </button>
        </form>
      ) : (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center text-green-700">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-medium">Signed by: {signature}</span>
          </div>
        </div>
      )}
      
      <SignatureListModal
        isOpen={showSignatures}
        onClose={() => setShowSignatures(false)}
        signatures={signatures || []}
      />
    </div>
  );
};

export default PermissionSlip;