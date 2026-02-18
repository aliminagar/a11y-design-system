import React, { useState } from 'react';
import { Input } from '../components/Input';
import { ComponentPage } from '../docs/ComponentPage';
import { CodeBlock } from '../docs/CodeBlock';
import { componentDocs } from '../data/componentDocs';

const inputDoc = componentDocs.find(doc => doc.id === 'input')!;

const codeExample = `import { Input } from './components/Input';

function Example() {
  const [value, setValue] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="space-y-4">
      <Input
        label="Username"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        helperText="Choose a unique username"
      />

      <Input
        label="Email Address"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <Input
        label="Password"
        type="password"
        error="Password must be at least 8 characters"
      />
    </div>
  );
}`;

const DemoComponent = () => {
  const [value, setValue] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setShowError(e.target.value.length > 0 && e.target.value.length < 8);
  };

  return (
    <div className="space-y-6 max-w-md">
      <Input
        label="Username"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        helperText="Choose a unique username"
        placeholder="Enter your username"
      />

      <Input
        label="Email Address"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="you@example.com"
      />

      <Input
        label="Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        error={showError ? 'Password must be at least 8 characters' : undefined}
        required
        placeholder="Enter your password"
      />

      <Input
        label="Disabled Input"
        value="Cannot edit this"
        disabled
      />
    </div>
  );
};

export const InputDemo: React.FC = () => {
  return (
    <ComponentPage
      doc={inputDoc}
      demoComponent={<DemoComponent />}
      codeExample={<CodeBlock code={codeExample} language="tsx" />}
    />
  );
};
