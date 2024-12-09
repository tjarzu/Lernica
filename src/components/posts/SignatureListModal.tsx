import React from 'react';
import { X, Clock } from 'lucide-react';

interface SignatureListModalProps {
  isOpen: boolean;
  onClose: () => void;
  signatures: Array<{
    name: string;
    timestamp: string;
    student?: {
      name: string;
      class: string;
    };
  }>;
}

const SignatureListModal: React.FC<SignatureListModalProps> = ({ isOpen, onClose, signatures }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg mx-4">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Parent Signatures</h2>
            <p className="text-sm text-gray-500">{signatures.length} parents have signed</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          <div className="space-y-4">
            {signatures.map((signature, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                  {signature.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">{signature.name}</h3>
                      {signature.student && (
                        <p className="text-sm text-gray-600">
                          Parent of {signature.student.name} ({signature.student.class})
                        </p>
                      )}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {new Date(signature.timestamp).toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignatureListModal;