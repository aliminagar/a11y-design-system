import React, { useState } from 'react';
import { Modal } from '../components/Modal';
import { Button } from '../components/Button';
import { ComponentPage } from '../docs/ComponentPage';
import { CodeBlock } from '../docs/CodeBlock';
import { componentDocs } from '../data/componentDocs';

const modalDoc = componentDocs.find(doc => doc.id === 'modal')!;

const codeExample = `import { Modal } from './components/Modal';
import { Button } from './components/Button';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Confirm Action"
        size="md"
      >
        <p className="mb-4">
          Are you sure you want to continue with this action?
        </p>
        <div className="flex justify-end space-x-3">
          <Button variant="secondary" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => setIsOpen(false)}>
            Confirm
          </Button>
        </div>
      </Modal>
    </>
  );
}`;

const DemoComponent = () => {
  const [isBasicOpen, setIsBasicOpen] = useState(false);
  const [isSmallOpen, setIsSmallOpen] = useState(false);
  const [isLargeOpen, setIsLargeOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Basic Modal</h3>
        <Button onClick={() => setIsBasicOpen(true)}>
          Open Basic Modal
        </Button>
        <Modal
          isOpen={isBasicOpen}
          onClose={() => setIsBasicOpen(false)}
          title="Welcome"
        >
          <p className="mb-4 text-gray-700">
            This is a basic modal dialog. It traps focus, can be closed with the Escape key or by clicking outside.
          </p>
          <div className="flex justify-end">
            <Button onClick={() => setIsBasicOpen(false)}>
              Got it!
            </Button>
          </div>
        </Modal>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Confirmation Modal</h3>
        <Button variant="danger" onClick={() => setIsSmallOpen(true)}>
          Delete Account
        </Button>
        <Modal
          isOpen={isSmallOpen}
          onClose={() => setIsSmallOpen(false)}
          title="Confirm Deletion"
          size="sm"
        >
          <p id="modal-description" className="mb-4 text-gray-700">
            Are you sure you want to delete your account? This action cannot be undone.
          </p>
          <div className="flex justify-end space-x-3">
            <Button variant="secondary" onClick={() => setIsSmallOpen(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={() => setIsSmallOpen(false)}>
              Delete
            </Button>
          </div>
        </Modal>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Large Modal with Content</h3>
        <Button onClick={() => setIsLargeOpen(true)}>
          Open Large Modal
        </Button>
        <Modal
          isOpen={isLargeOpen}
          onClose={() => setIsLargeOpen(false)}
          title="Terms and Conditions"
          size="lg"
        >
          <div className="space-y-4 text-gray-700">
            <p>
              Please read these terms and conditions carefully before using our service.
            </p>
            <h3 className="font-semibold">1. Acceptance of Terms</h3>
            <p>
              By accessing and using this service, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
            <h3 className="font-semibold">2. Use License</h3>
            <p>
              Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.
            </p>
            <h3 className="font-semibold">3. Disclaimer</h3>
            <p>
              The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties.
            </p>
          </div>
          <div className="flex justify-end space-x-3 mt-6">
            <Button variant="secondary" onClick={() => setIsLargeOpen(false)}>
              Decline
            </Button>
            <Button onClick={() => setIsLargeOpen(false)}>
              Accept
            </Button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export const ModalDemo: React.FC = () => {
  return (
    <ComponentPage
      doc={modalDoc}
      demoComponent={<DemoComponent />}
      codeExample={<CodeBlock code={codeExample} language="tsx" />}
    />
  );
};
