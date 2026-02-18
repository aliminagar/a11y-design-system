import React, { useState } from 'react';
import { Checkbox } from '../components/Checkbox';
import { ComponentPage } from '../docs/ComponentPage';
import { CodeBlock } from '../docs/CodeBlock';
import { componentDocs } from '../data/componentDocs';

const checkboxDoc = componentDocs.find(doc => doc.id === 'checkbox')!;

const codeExample = `import { Checkbox } from './components/Checkbox';

function Example() {
  const [checked, setChecked] = useState(false);
  const [newsletter, setNewsletter] = useState(false);

  return (
    <div className="space-y-4">
      <Checkbox
        label="I agree to the terms and conditions"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />

      <Checkbox
        label="Subscribe to newsletter"
        description="Receive weekly updates about new features and tips"
        checked={newsletter}
        onChange={(e) => setNewsletter(e.target.checked)}
      />

      <Checkbox
        label="Disabled checkbox"
        disabled
      />
    </div>
  );
}`;

const DemoComponent = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [newsletter, setNewsletter] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="space-y-6">
      <Checkbox
        label="I agree to the terms and conditions"
        checked={termsAccepted}
        onChange={(e) => setTermsAccepted(e.target.checked)}
      />

      <Checkbox
        label="Subscribe to newsletter"
        description="Receive weekly updates about new features and tips"
        checked={newsletter}
        onChange={(e) => setNewsletter(e.target.checked)}
      />

      <Checkbox
        label="Enable notifications"
        description="Get notified when someone mentions you"
        checked={notifications}
        onChange={(e) => setNotifications(e.target.checked)}
      />

      <Checkbox
        label="Disabled checkbox"
        description="This option is not available"
        disabled
      />

      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <p className="text-sm text-gray-700">
          <strong>Selected:</strong> Terms: {termsAccepted ? 'Yes' : 'No'}, Newsletter: {newsletter ? 'Yes' : 'No'}, Notifications: {notifications ? 'Yes' : 'No'}
        </p>
      </div>
    </div>
  );
};

export const CheckboxDemo: React.FC = () => {
  return (
    <ComponentPage
      doc={checkboxDoc}
      demoComponent={<DemoComponent />}
      codeExample={<CodeBlock code={codeExample} language="tsx" />}
    />
  );
};
