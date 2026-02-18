import React from 'react';

export interface RadioOption {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  name: string;
  label: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
  error?: string;
}

export const RadioGroup = React.forwardRef<HTMLFieldSetElement, RadioGroupProps>(
  ({ name, label, options, value, onChange, required, error }, ref) => {
    const errorId = error ? `${name}-error` : undefined;

    return (
      <fieldset
        ref={ref}
        className="w-full"
        aria-required={required}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={errorId}
      >
        <legend className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-600 ml-1" aria-label="required">*</span>}
        </legend>
        <div className="space-y-3">
          {options.map((option) => {
            const radioId = `${name}-${option.value}`;
            const descriptionId = option.description ? `${radioId}-description` : undefined;

            return (
              <div key={option.value} className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    type="radio"
                    id={radioId}
                    name={name}
                    value={option.value}
                    checked={value === option.value}
                    onChange={(e) => onChange?.(e.target.value)}
                    disabled={option.disabled}
                    className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-4 focus:ring-blue-300 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
                    aria-describedby={descriptionId}
                  />
                </div>
                <div className="ml-3">
                  <label
                    htmlFor={radioId}
                    className="font-medium text-gray-700 cursor-pointer"
                  >
                    {option.label}
                  </label>
                  {option.description && (
                    <p id={descriptionId} className="text-sm text-gray-500">
                      {option.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        {error && (
          <p id={errorId} className="mt-2 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
      </fieldset>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';
