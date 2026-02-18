import React from 'react';
import { Navigation, NavItem } from '../components/Navigation';
import { ComponentPage } from '../docs/ComponentPage';
import { CodeBlock } from '../docs/CodeBlock';
import { componentDocs } from '../data/componentDocs';

const navDoc = componentDocs.find(doc => doc.id === 'navigation')!;

const codeExample = `import { Navigation } from './components/Navigation';

function Example() {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    {
      label: 'Products',
      items: [
        { label: 'Software', href: '#software' },
        { label: 'Hardware', href: '#hardware' },
        { label: 'Services', href: '#services' }
      ]
    },
    {
      label: 'Resources',
      items: [
        { label: 'Documentation', href: '#docs' },
        { label: 'Tutorials', href: '#tutorials' },
        { label: 'API Reference', href: '#api' }
      ]
    },
    { label: 'Contact', href: '#contact' }
  ];

  return <Navigation items={navItems} ariaLabel="Main navigation" />;
}`;

const DemoComponent = () => {
  const mainNavItems: NavItem[] = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    {
      label: 'Products',
      items: [
        { label: 'Software', href: '#software' },
        { label: 'Hardware', href: '#hardware' },
        { label: 'Services', href: '#services' },
        { label: 'Consulting', href: '#consulting' }
      ]
    },
    {
      label: 'Resources',
      items: [
        { label: 'Documentation', href: '#docs' },
        { label: 'Tutorials', href: '#tutorials' },
        { label: 'API Reference', href: '#api' },
        { label: 'Blog', href: '#blog' }
      ]
    },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' }
  ];

  const simpleNavItems: NavItem[] = [
    { label: 'Dashboard', href: '#dashboard' },
    { label: 'Projects', href: '#projects' },
    { label: 'Team', href: '#team' },
    { label: 'Settings', href: '#settings' }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Navigation with Dropdowns</h3>
        <div className="border border-gray-300 rounded-lg overflow-hidden">
          <Navigation items={mainNavItems} ariaLabel="Main navigation example" />
        </div>
        <p className="mt-3 text-sm text-gray-600">
          Try using keyboard navigation: Tab to move between items, Enter/Space to open dropdowns, Arrow keys to navigate within dropdowns, Escape to close.
        </p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Simple Navigation (No Dropdowns)</h3>
        <div className="border border-gray-300 rounded-lg overflow-hidden">
          <Navigation items={simpleNavItems} ariaLabel="Simple navigation example" />
        </div>
      </div>

      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h4 className="font-semibold text-blue-900 mb-2">Keyboard Navigation Tips:</h4>
        <ul className="space-y-1 text-sm text-blue-800">
          <li>• Press <kbd className="px-1.5 py-0.5 bg-white border border-blue-300 rounded text-xs">Tab</kbd> to move between navigation items</li>
          <li>• Press <kbd className="px-1.5 py-0.5 bg-white border border-blue-300 rounded text-xs">Enter</kbd> or <kbd className="px-1.5 py-0.5 bg-white border border-blue-300 rounded text-xs">Space</kbd> to open dropdown menus</li>
          <li>• Use <kbd className="px-1.5 py-0.5 bg-white border border-blue-300 rounded text-xs">↓</kbd> and <kbd className="px-1.5 py-0.5 bg-white border border-blue-300 rounded text-xs">↑</kbd> to navigate within dropdowns</li>
          <li>• Press <kbd className="px-1.5 py-0.5 bg-white border border-blue-300 rounded text-xs">Esc</kbd> to close dropdown and return focus to parent</li>
        </ul>
      </div>
    </div>
  );
};

export const NavigationDemo: React.FC = () => {
  return (
    <ComponentPage
      doc={navDoc}
      demoComponent={<DemoComponent />}
      codeExample={<CodeBlock code={codeExample} language="tsx" />}
    />
  );
};
