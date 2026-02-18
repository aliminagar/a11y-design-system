import React from 'react';
import { ComponentDoc } from '../types/docs';

interface ComponentPageProps {
  doc: ComponentDoc;
  demoComponent: React.ReactNode;
  codeExample: string;
}

export const ComponentPage: React.FC<ComponentPageProps> = ({ doc, demoComponent, codeExample }) => {
  return (
    <div className="max-w-5xl mx-auto py-8 px-6">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">{doc.name}</h1>
        <p className="text-lg text-gray-600">{doc.description}</p>
      </header>

      <section className="mb-12" aria-labelledby="demo-heading">
        <h2 id="demo-heading" className="text-2xl font-bold text-gray-900 mb-4">Live Demo</h2>
        <div className="bg-white border border-gray-200 rounded-lg p-8">
          {demoComponent}
        </div>
      </section>

      <section className="mb-12" aria-labelledby="features-heading">
        <h2 id="features-heading" className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
        <ul className="space-y-2">
          {doc.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12" aria-labelledby="wcag-heading">
        <h2 id="wcag-heading" className="text-2xl font-bold text-gray-900 mb-4">WCAG 2.1 Compliance</h2>
        <div className="space-y-4">
          {doc.wcagCriteria.map((criteria) => (
            <div key={criteria.id} className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-2">
                <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold text-green-800 bg-green-200 rounded">
                  Level {criteria.level}
                </span>
                <h3 className="font-semibold text-gray-900">
                  {criteria.id} - {criteria.title}
                </h3>
              </div>
              <p className="text-gray-700">{criteria.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12" aria-labelledby="aria-heading">
        <h2 id="aria-heading" className="text-2xl font-bold text-gray-900 mb-4">ARIA Attributes</h2>
        <div className="space-y-4">
          {doc.ariaAttributes.map((attr, index) => (
            <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                <code className="text-blue-600 bg-blue-100 px-2 py-1 rounded">{attr.name}</code>
              </h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Purpose:</strong> {attr.purpose}</p>
                <p><strong>Usage:</strong> {attr.usage}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12" aria-labelledby="keyboard-heading">
        <h2 id="keyboard-heading" className="text-2xl font-bold text-gray-900 mb-4">Keyboard Support</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">Key</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">Action</th>
              </tr>
            </thead>
            <tbody>
              {doc.keyboardSupport.map((kb, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="border border-gray-300 px-4 py-2">
                    <code className="text-sm bg-gray-200 px-2 py-1 rounded">{kb.key}</code>
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-700">{kb.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="code-heading">
        <h2 id="code-heading" className="text-2xl font-bold text-gray-900 mb-4">Code Example</h2>
        <div className="text-sm">
          {codeExample}
        </div>
      </section>
    </div>
  );
};
