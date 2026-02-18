import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export interface NavItem {
  label: string;
  href?: string;
  onClick?: () => void;
  items?: NavItem[];
}

export interface NavigationProps {
  items: NavItem[];
  ariaLabel?: string;
}

const NavMenuItem: React.FC<{ item: NavItem; index: number }> = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!item.items) return;

    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsOpen(!isOpen);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      buttonRef.current?.focus();
    } else if (e.key === 'ArrowDown' && isOpen) {
      e.preventDefault();
      const firstItem = dropdownRef.current?.querySelector('a, button') as HTMLElement;
      firstItem?.focus();
    }
  };

  const handleSubmenuKeyDown = (e: React.KeyboardEvent, itemIndex: number) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextItem = dropdownRef.current?.querySelectorAll('a, button')[itemIndex + 1] as HTMLElement;
      nextItem?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (itemIndex === 0) {
        buttonRef.current?.focus();
      } else {
        const prevItem = dropdownRef.current?.querySelectorAll('a, button')[itemIndex - 1] as HTMLElement;
        prevItem?.focus();
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      buttonRef.current?.focus();
    }
  };

  if (item.items && item.items.length > 0) {
    return (
      <div ref={dropdownRef} className="relative">
        <button
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={handleKeyDown}
          aria-expanded={isOpen}
          aria-haspopup="true"
          className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-lg transition-colors"
        >
          {item.label}
          <ChevronDown size={16} className="ml-1" aria-hidden="true" />
        </button>
        {isOpen && (
          <div
            role="menu"
            className="absolute left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
          >
            {item.items.map((subItem, subIndex) => (
              <a
                key={subIndex}
                href={subItem.href}
                onClick={subItem.onClick}
                onKeyDown={(e) => handleSubmenuKeyDown(e, subIndex)}
                role="menuitem"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-blue-300 first:rounded-t-lg last:rounded-b-lg"
              >
                {subItem.label}
              </a>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <a
      href={item.href}
      onClick={item.onClick}
      className="px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-lg transition-colors"
    >
      {item.label}
    </a>
  );
};

export const Navigation: React.FC<NavigationProps> = ({ items, ariaLabel = 'Main navigation' }) => {
  return (
    <nav aria-label={ariaLabel} className="bg-white border-b border-gray-200">
      <div className="flex items-center space-x-1 p-4">
        {items.map((item, index) => (
          <NavMenuItem key={index} item={item} index={index} />
        ))}
      </div>
    </nav>
  );
};
