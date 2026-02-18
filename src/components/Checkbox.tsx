import React from 'react';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  description?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, description, id, className = '', ...props }, ref) => {
    const checkboxId = id || `checkbox-${label.toLowerCase().replace(/\s+/g, '-')}`;
    const descriptionId = description ? `${checkboxId}-description` : undefined;

    return (
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            ref={ref}
            type="checkbox"
            id={checkboxId}
            className={`w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-4 focus:ring-blue-300 cursor-pointer ${className}`}
            aria-describedby={descriptionId}
            {...props}
          />
        </div>
        <div className="ml-3">
          <label htmlFor={checkboxId} className="font-medium text-gray-700 cursor-pointer">
            {label}
          </label>
          {description && (
            <p id={descriptionId} className="text-sm text-gray-500">
              {description}
            </p>
          )}
        </div>
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
