import React, { useState } from 'react';
import { Alert } from '../components/Alert';
import { Button } from '../components/Button';
import { ComponentPage } from '../docs/ComponentPage';
import { CodeBlock } from '../docs/CodeBlock';
import { componentDocs } from '../data/componentDocs';

const alertDoc = componentDocs.find(doc => doc.id === 'alert')!;

const codeExample = `import { Alert } from './components/Alert';

function Example() {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <div className="space-y-4">
      <Alert variant="info" title="Information">
        This is an informational message.
      </Alert>

      <Alert variant="success" title="Success">
        Your changes have been saved successfully.
      </Alert>

      <Alert variant="warning" title="Warning">
        Please review your settings before proceeding.
      </Alert>

      <Alert variant="error" title="Error">
        An error occurred while processing your request.
      </Alert>

      {showAlert && (
        <Alert
          variant="info"
          dismissible
          onDismiss={() => setShowAlert(false)}
        >
          This alert can be dismissed.
        </Alert>
      )}
    </div>
  );
}`;

const DemoComponent = () => {
  const [showDismissible, setShowDismissible] = useState(true);
  const [showTriggered, setShowTriggered] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Alert Variants</h3>
        <div className="space-y-4">
          <Alert variant="info" title="Information">
            This is an informational message to provide context or helpful details.
          </Alert>

          <Alert variant="success" title="Success">
            Your changes have been saved successfully. You can continue working.
          </Alert>

          <Alert variant="warning" title="Warning">
            Please review your settings before proceeding with this action.
          </Alert>

          <Alert variant="error" title="Error">
            An error occurred while processing your request. Please try again later.
          </Alert>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Alerts Without Titles</h3>
        <div className="space-y-4">
          <Alert variant="info">
            You have 3 unread messages in your inbox.
          </Alert>

          <Alert variant="success">
            Profile updated successfully!
          </Alert>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Dismissible Alert</h3>
        {showDismissible ? (
          <Alert
            variant="info"
            title="Cookie Notice"
            dismissible
            onDismiss={() => setShowDismissible(false)}
          >
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
          </Alert>
        ) : (
          <div className="p-4 bg-gray-100 rounded-lg">
            <p className="text-sm text-gray-600">Alert dismissed. </p>
            <Button size="sm" onClick={() => setShowDismissible(true)} className="mt-2">
              Show Alert Again
            </Button>
          </div>
        )}
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Dynamic Alert (ARIA Live Region Test)</h3>
        <Button onClick={() => setShowTriggered(true)}>
          Trigger Alert
        </Button>
        {showTriggered && (
          <div className="mt-4">
            <Alert
              variant="success"
              title="Action Complete"
              dismissible
              onDismiss={() => setShowTriggered(false)}
            >
              This alert was triggered dynamically and announced to screen readers.
            </Alert>
          </div>
        )}
      </div>
    </div>
  );
};

export const AlertDemo: React.FC = () => {
  return (
    <ComponentPage
      doc={alertDoc}
      demoComponent={<DemoComponent />}
      codeExample={<CodeBlock code={codeExample} language="tsx" />}
    />
  );
};
