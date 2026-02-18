import React from 'react';
import { AlertCircle, CheckCircle, Info, XCircle, X } from 'lucide-react';

export interface AlertProps {
  variant?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  children: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
}

export const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  title,
  children,
  dismissible = false,
  onDismiss
}) => {
  const variants = {
    info: {
      container: 'bg-blue-50 border-blue-200',
      icon: <Info className="text-blue-600" size={20} />,
      title: 'text-blue-900',
      text: 'text-blue-800'
    },
    success: {
      container: 'bg-green-50 border-green-200',
      icon: <CheckCircle className="text-green-600" size={20} />,
      title: 'text-green-900',
      text: 'text-green-800'
    },
    warning: {
      container: 'bg-yellow-50 border-yellow-200',
      icon: <AlertCircle className="text-yellow-600" size={20} />,
      title: 'text-yellow-900',
      text: 'text-yellow-800'
    },
    error: {
      container: 'bg-red-50 border-red-200',
      icon: <XCircle className="text-red-600" size={20} />,
      title: 'text-red-900',
      text: 'text-red-800'
    }
  };

  const config = variants[variant];
  const role = variant === 'error' || variant === 'warning' ? 'alert' : 'status';
  const ariaLive = variant === 'error' || variant === 'warning' ? 'assertive' : 'polite';

  return (
    <div
      role={role}
      aria-live={ariaLive}
      aria-atomic="true"
      className={`border rounded-lg p-4 ${config.container}`}
    >
      <div className="flex items-start">
        <div className="flex-shrink-0">{config.icon}</div>
        <div className="ml-3 flex-1">
          {title && (
            <h3 className={`text-sm font-semibold mb-1 ${config.title}`}>
              {title}
            </h3>
          )}
          <div className={`text-sm ${config.text}`}>
            {children}
          </div>
        </div>
        {dismissible && onDismiss && (
          <button
            onClick={onDismiss}
            className="flex-shrink-0 ml-3 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-lg p-1"
            aria-label="Dismiss alert"
          >
            <X size={16} className={config.text} />
          </button>
        )}
      </div>
    </div>
  );
};
