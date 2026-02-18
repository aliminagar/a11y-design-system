import React from 'react';
import { Book } from 'lucide-react';
import { componentDocs } from '../data/componentDocs';

interface SidebarProps {
  activeComponent: string;
  onSelect: (componentId: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeComponent, onSelect }) => {
  return (
    <aside className="w-64 bg-gray-50 border-r border-gray-200 h-screen overflow-y-auto" role="navigation" aria-label="Component navigation">
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Book className="text-blue-600" size={28} />
          <h1 className="text-xl font-bold text-gray-900">A11y Components</h1>
        </div>
        <nav>
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Components</h2>
          <ul className="space-y-1">
            {componentDocs.map((doc) => (
              <li key={doc.id}>
                <button
                  onClick={() => onSelect(doc.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300 ${
                    activeComponent === doc.id
                      ? 'bg-blue-600 text-white font-medium'
                      : 'text-gray-700 hover:bg-gray-200'
                  }`}
                  aria-current={activeComponent === doc.id ? 'page' : undefined}
                >
                  {doc.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};
