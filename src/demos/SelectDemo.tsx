import React, { useState } from 'react';
import { Select } from '../components/Select';
import { ComponentPage } from '../docs/ComponentPage';
import { CodeBlock } from '../docs/CodeBlock';
import { componentDocs } from '../data/componentDocs';

const selectDoc = componentDocs.find(doc => doc.id === 'select')!;

const codeExample = `import { Select } from './components/Select';

function Example() {
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');

  return (
    <div className="space-y-4">
      <Select
        label="Country"
        placeholder="Select a country"
        value={country}
        onChange={setCountry}
        required
        options={[
          { value: 'us', label: 'United States' },
          { value: 'ca', label: 'Canada' },
          { value: 'uk', label: 'United Kingdom' }
        ]}
      />

      <Select
        label="State"
        value={state}
        onChange={setState}
        helperText="Select your state of residence"
        options={[
          { value: 'ca', label: 'California' },
          { value: 'ny', label: 'New York' },
          { value: 'tx', label: 'Texas' }
        ]}
      />
    </div>
  );
}`;

const DemoComponent = () => {
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [theme, setTheme] = useState('light');

  return (
    <div className="space-y-6 max-w-md">
      <Select
        label="Country"
        placeholder="Select a country"
        value={country}
        onChange={setCountry}
        required
        options={[
          { value: 'us', label: 'United States' },
          { value: 'ca', label: 'Canada' },
          { value: 'uk', label: 'United Kingdom' },
          { value: 'au', label: 'Australia' },
          { value: 'de', label: 'Germany' },
          { value: 'fr', label: 'France' }
        ]}
      />

      <Select
        label="State / Province"
        placeholder="Select a state"
        value={state}
        onChange={setState}
        helperText="Select your state or province of residence"
        options={[
          { value: 'ca', label: 'California' },
          { value: 'ny', label: 'New York' },
          { value: 'tx', label: 'Texas' },
          { value: 'fl', label: 'Florida' },
          { value: 'wa', label: 'Washington' }
        ]}
      />

      <Select
        label="Theme"
        value={theme}
        onChange={setTheme}
        options={[
          { value: 'light', label: 'Light' },
          { value: 'dark', label: 'Dark' },
          { value: 'auto', label: 'Auto' },
          { value: 'custom', label: 'Custom', disabled: true }
        ]}
      />

      <Select
        label="Disabled Select"
        value="disabled"
        disabled
        options={[
          { value: 'disabled', label: 'This is disabled' }
        ]}
      />

      <div className="p-4 bg-gray-100 rounded-lg">
        <p className="text-sm text-gray-700">
          <strong>Selected:</strong> Country: {country || 'None'}, State: {state || 'None'}, Theme: {theme}
        </p>
      </div>
    </div>
  );
};

export const SelectDemo: React.FC = () => {
  return (
    <ComponentPage
      doc={selectDoc}
      demoComponent={<DemoComponent />}
      codeExample={<CodeBlock code={codeExample} language="tsx" />}
    />
  );
};
