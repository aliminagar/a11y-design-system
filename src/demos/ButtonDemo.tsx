import React from 'react';
import { Button } from '../components/Button';
import { ComponentPage } from '../docs/ComponentPage';
import { CodeBlock } from '../docs/CodeBlock';
import { componentDocs } from '../data/componentDocs';

const buttonDoc = componentDocs.find(doc => doc.id === 'button')!;

const codeExample = `import { Button } from './components/Button';

function Example() {
  return (
    <div className="space-y-4">
      <Button variant="primary" onClick={() => alert('Primary clicked')}>
        Primary Button
      </Button>

      <Button variant="secondary" onClick={() => alert('Secondary clicked')}>
        Secondary Button
      </Button>

      <Button variant="danger" onClick={() => alert('Danger clicked')}>
        Danger Button
      </Button>

      <Button disabled>
        Disabled Button
      </Button>

      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  );
}`;

const DemoComponent = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Variants</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary" onClick={() => alert('Primary clicked')}>
            Primary Button
          </Button>
          <Button variant="secondary" onClick={() => alert('Secondary clicked')}>
            Secondary Button
          </Button>
          <Button variant="danger" onClick={() => alert('Danger clicked')}>
            Danger Button
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Sizes</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">States</h3>
        <div className="flex flex-wrap gap-3">
          <Button>Active Button</Button>
          <Button disabled>Disabled Button</Button>
        </div>
      </div>
    </div>
  );
};

export const ButtonDemo: React.FC = () => {
  return (
    <ComponentPage
      doc={buttonDoc}
      demoComponent={<DemoComponent />}
      codeExample={<CodeBlock code={codeExample} language="tsx" />}
    />
  );
};
