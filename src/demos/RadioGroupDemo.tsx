import React, { useState } from 'react';
import { RadioGroup } from '../components/RadioGroup';
import { ComponentPage } from '../docs/ComponentPage';
import { CodeBlock } from '../docs/CodeBlock';
import { componentDocs } from '../data/componentDocs';

const radioDoc = componentDocs.find(doc => doc.id === 'radio-group')!;

const codeExample = `import { RadioGroup } from './components/RadioGroup';

function Example() {
  const [size, setSize] = useState('medium');
  const [plan, setPlan] = useState('');

  return (
    <div className="space-y-6">
      <RadioGroup
        name="size"
        label="Select size"
        value={size}
        onChange={setSize}
        options={[
          { value: 'small', label: 'Small' },
          { value: 'medium', label: 'Medium' },
          { value: 'large', label: 'Large' }
        ]}
      />

      <RadioGroup
        name="plan"
        label="Choose your plan"
        value={plan}
        onChange={setPlan}
        required
        options={[
          {
            value: 'free',
            label: 'Free',
            description: 'Basic features for personal use'
          },
          {
            value: 'pro',
            label: 'Pro',
            description: 'Advanced features for professionals'
          }
        ]}
      />
    </div>
  );
}`;

const DemoComponent = () => {
  const [size, setSize] = useState('medium');
  const [plan, setPlan] = useState('free');
  const [notification, setNotification] = useState('email');

  return (
    <div className="space-y-8">
      <RadioGroup
        name="size"
        label="T-Shirt Size"
        value={size}
        onChange={setSize}
        options={[
          { value: 'small', label: 'Small' },
          { value: 'medium', label: 'Medium' },
          { value: 'large', label: 'Large' },
          { value: 'xlarge', label: 'Extra Large' }
        ]}
      />

      <RadioGroup
        name="plan"
        label="Choose your plan"
        value={plan}
        onChange={setPlan}
        required
        options={[
          {
            value: 'free',
            label: 'Free',
            description: 'Basic features for personal use'
          },
          {
            value: 'pro',
            label: 'Pro',
            description: 'Advanced features for professionals'
          },
          {
            value: 'enterprise',
            label: 'Enterprise',
            description: 'Custom solutions for large organizations',
            disabled: true
          }
        ]}
      />

      <RadioGroup
        name="notifications"
        label="Notification Preferences"
        value={notification}
        onChange={setNotification}
        options={[
          {
            value: 'email',
            label: 'Email only',
            description: 'Receive notifications via email'
          },
          {
            value: 'sms',
            label: 'SMS only',
            description: 'Receive notifications via text message'
          },
          {
            value: 'both',
            label: 'Email and SMS',
            description: 'Receive notifications through both channels'
          }
        ]}
      />

      <div className="p-4 bg-gray-100 rounded-lg">
        <p className="text-sm text-gray-700">
          <strong>Selected:</strong> Size: {size}, Plan: {plan}, Notifications: {notification}
        </p>
      </div>
    </div>
  );
};

export const RadioGroupDemo: React.FC = () => {
  return (
    <ComponentPage
      doc={radioDoc}
      demoComponent={<DemoComponent />}
      codeExample={<CodeBlock code={codeExample} language="tsx" />}
    />
  );
};
