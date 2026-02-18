import { ComponentDoc } from '../types/docs';

export const componentDocs: ComponentDoc[] = [
  {
    id: 'button',
    name: 'Button',
    description: 'An accessible button component that supports multiple variants, sizes, and full keyboard navigation.',
    wcagCriteria: [
      {
        id: '2.1.1',
        level: 'A',
        title: 'Keyboard',
        description: 'All functionality is available from a keyboard. Button can be activated with Enter or Space.'
      },
      {
        id: '2.4.7',
        level: 'AA',
        title: 'Focus Visible',
        description: 'Visible focus indicator with 4px ring when button receives keyboard focus.'
      },
      {
        id: '3.2.4',
        level: 'AA',
        title: 'Consistent Identification',
        description: 'Buttons are consistently styled and identified across the interface.'
      },
      {
        id: '4.1.2',
        level: 'A',
        title: 'Name, Role, Value',
        description: 'Uses native button element with implicit role and accessible name via content or aria-label.'
      }
    ],
    ariaAttributes: [
      {
        name: 'aria-label',
        purpose: 'Provides accessible name when button content is not descriptive',
        usage: 'Optional. Use when button contains only an icon or when additional context is needed.'
      },
      {
        name: 'aria-disabled',
        purpose: 'Indicates disabled state to assistive technologies',
        usage: 'Automatically set via disabled prop. Conveys that button is present but not operable.'
      }
    ],
    keyboardSupport: [
      { key: 'Enter', action: 'Activates the button' },
      { key: 'Space', action: 'Activates the button' },
      { key: 'Tab', action: 'Moves focus to the button' },
      { key: 'Shift + Tab', action: 'Moves focus away from the button' }
    ],
    features: [
      'Native button element for semantic HTML',
      'Visible focus indicators meeting WCAG 2.1 AA requirements',
      'Disabled state properly communicated to assistive technologies',
      'Multiple variants (primary, secondary, danger) with sufficient color contrast',
      'Flexible sizing options (sm, md, lg)',
      'Full TypeScript support with proper types'
    ]
  },
  {
    id: 'input',
    name: 'Form Input',
    description: 'A fully accessible text input with label, error messages, helper text, and proper ARIA associations.',
    wcagCriteria: [
      {
        id: '1.3.1',
        level: 'A',
        title: 'Info and Relationships',
        description: 'Label is programmatically associated with input using htmlFor/id. Error and helper text linked via aria-describedby.'
      },
      {
        id: '2.4.7',
        level: 'AA',
        title: 'Focus Visible',
        description: 'Clear focus ring appears when input receives keyboard focus.'
      },
      {
        id: '3.3.1',
        level: 'A',
        title: 'Error Identification',
        description: 'Errors are identified with text and red styling. Error messages use role="alert" for immediate announcement.'
      },
      {
        id: '3.3.2',
        level: 'A',
        title: 'Labels or Instructions',
        description: 'Every input has a visible label. Helper text provides additional instructions when needed.'
      },
      {
        id: '4.1.2',
        level: 'A',
        title: 'Name, Role, Value',
        description: 'Uses native input with proper label, aria-invalid for errors, and aria-required for required fields.'
      }
    ],
    ariaAttributes: [
      {
        name: 'aria-describedby',
        purpose: 'Associates error messages and helper text with the input',
        usage: 'Automatically set to reference error or helper text elements. Screen readers announce these when input is focused.'
      },
      {
        name: 'aria-invalid',
        purpose: 'Indicates validation state to assistive technologies',
        usage: 'Set to "true" when error prop is provided, "false" otherwise.'
      },
      {
        name: 'aria-required',
        purpose: 'Indicates that input must be filled before form submission',
        usage: 'Set to "true" when required prop is provided. Visual asterisk also indicates required state.'
      }
    ],
    keyboardSupport: [
      { key: 'Tab', action: 'Moves focus to the input field' },
      { key: 'Shift + Tab', action: 'Moves focus away from the input' },
      { key: 'Text input keys', action: 'Enters text into the field' }
    ],
    features: [
      'Programmatic label association for screen readers',
      'Error messages announced immediately with role="alert"',
      'Helper text for additional context',
      'Required field indicator (visual and semantic)',
      'Error state with distinct styling and border color',
      'Focus indicators meeting WCAG AA standards',
      'Support for all standard input types'
    ]
  },
  {
    id: 'checkbox',
    name: 'Checkbox',
    description: 'An accessible checkbox with label and optional description, supporting full keyboard interaction.',
    wcagCriteria: [
      {
        id: '1.3.1',
        level: 'A',
        title: 'Info and Relationships',
        description: 'Label programmatically associated with checkbox. Description linked via aria-describedby.'
      },
      {
        id: '2.1.1',
        level: 'A',
        title: 'Keyboard',
        description: 'Can be checked/unchecked using Space key. Focusable via Tab.'
      },
      {
        id: '2.4.7',
        level: 'AA',
        title: 'Focus Visible',
        description: 'Visible focus ring appears when checkbox receives focus.'
      },
      {
        id: '4.1.2',
        level: 'A',
        title: 'Name, Role, Value',
        description: 'Native checkbox with implicit role. Checked state automatically conveyed to assistive technologies.'
      }
    ],
    ariaAttributes: [
      {
        name: 'aria-describedby',
        purpose: 'Associates description text with checkbox for additional context',
        usage: 'Automatically set when description prop is provided. Screen readers announce description after label.'
      },
      {
        name: 'aria-checked',
        purpose: 'Indicates checked state',
        usage: 'Implicit on native checkbox. Automatically managed by browser.'
      }
    ],
    keyboardSupport: [
      { key: 'Space', action: 'Toggles the checked state' },
      { key: 'Tab', action: 'Moves focus to the checkbox' },
      { key: 'Shift + Tab', action: 'Moves focus away from the checkbox' }
    ],
    features: [
      'Native checkbox element for full browser support',
      'Label clickable to toggle checkbox',
      'Optional description for additional context',
      'Visible focus indicators',
      'Proper state management accessible to assistive technologies',
      'Cursor pointer on hover for better UX'
    ]
  },
  {
    id: 'radio-group',
    name: 'Radio Group',
    description: 'An accessible radio button group using fieldset/legend for proper grouping and keyboard navigation.',
    wcagCriteria: [
      {
        id: '1.3.1',
        level: 'A',
        title: 'Info and Relationships',
        description: 'Fieldset/legend groups related radio buttons. Each radio has programmatic label association.'
      },
      {
        id: '2.1.1',
        level: 'A',
        title: 'Keyboard',
        description: 'Arrow keys navigate between options. Space selects. Tab moves between groups.'
      },
      {
        id: '2.4.7',
        level: 'AA',
        title: 'Focus Visible',
        description: 'Clear focus indicators on radio buttons.'
      },
      {
        id: '3.3.2',
        level: 'A',
        title: 'Labels or Instructions',
        description: 'Group has legend label. Each option has individual label. Optional descriptions provide additional context.'
      },
      {
        id: '4.1.2',
        level: 'A',
        title: 'Name, Role, Value',
        description: 'Native radio inputs with implicit role. Selected state conveyed automatically.'
      }
    ],
    ariaAttributes: [
      {
        name: 'aria-required',
        purpose: 'Indicates that a selection is required',
        usage: 'Set on fieldset when required prop is true. Applied to entire group, not individual radios.'
      },
      {
        name: 'aria-invalid',
        purpose: 'Indicates validation error state',
        usage: 'Set on fieldset when error prop is provided.'
      },
      {
        name: 'aria-describedby',
        purpose: 'Associates error message with the group and descriptions with individual radios',
        usage: 'Automatically managed for both group-level errors and option descriptions.'
      }
    ],
    keyboardSupport: [
      { key: 'Tab', action: 'Moves focus into or out of the radio group' },
      { key: 'Arrow Up/Down', action: 'Moves focus to previous/next radio button and selects it' },
      { key: 'Arrow Left/Right', action: 'Moves focus to previous/next radio button and selects it' },
      { key: 'Space', action: 'Selects the focused radio button if not already selected' }
    ],
    features: [
      'Semantic fieldset/legend grouping',
      'Full keyboard navigation with arrow keys',
      'Individual option descriptions',
      'Disabled state support per option',
      'Group-level error handling',
      'Required field indication',
      'Proper focus management'
    ]
  },
  {
    id: 'select',
    name: 'Select / Dropdown',
    description: 'An accessible select dropdown with proper labeling, error handling, and keyboard navigation.',
    wcagCriteria: [
      {
        id: '1.3.1',
        level: 'A',
        title: 'Info and Relationships',
        description: 'Label associated with select. Helper text and errors linked via aria-describedby.'
      },
      {
        id: '2.1.1',
        level: 'A',
        title: 'Keyboard',
        description: 'Fully keyboard navigable. Arrow keys select options, Enter confirms, Escape closes.'
      },
      {
        id: '2.4.7',
        level: 'AA',
        title: 'Focus Visible',
        description: 'Visible focus ring when select receives focus.'
      },
      {
        id: '3.3.1',
        level: 'A',
        title: 'Error Identification',
        description: 'Errors identified with text and styling. Announced via role="alert".'
      },
      {
        id: '4.1.2',
        level: 'A',
        title: 'Name, Role, Value',
        description: 'Native select element with implicit combobox role. Selected value conveyed automatically.'
      }
    ],
    ariaAttributes: [
      {
        name: 'aria-describedby',
        purpose: 'Associates helper text or error messages with the select',
        usage: 'Automatically references helper or error text elements.'
      },
      {
        name: 'aria-invalid',
        purpose: 'Indicates validation error state',
        usage: 'Set to "true" when error prop provided.'
      },
      {
        name: 'aria-required',
        purpose: 'Indicates required selection',
        usage: 'Set when required prop is true.'
      }
    ],
    keyboardSupport: [
      { key: 'Tab', action: 'Moves focus to the select' },
      { key: 'Space / Enter', action: 'Opens the dropdown' },
      { key: 'Arrow Up/Down', action: 'Navigate options (when open or closed)' },
      { key: 'Home', action: 'Jumps to first option' },
      { key: 'End', action: 'Jumps to last option' },
      { key: 'Escape', action: 'Closes dropdown without selection change' },
      { key: 'Type character', action: 'Jumps to option starting with that character' }
    ],
    features: [
      'Native select element for maximum compatibility',
      'Optional placeholder text',
      'Helper text for instructions',
      'Error state with validation feedback',
      'Required field support',
      'Disabled options support',
      'Full keyboard navigation',
      'Type-ahead functionality'
    ]
  },
  {
    id: 'modal',
    name: 'Modal / Dialog',
    description: 'A fully accessible modal dialog with focus trapping, keyboard support, and proper ARIA roles.',
    wcagCriteria: [
      {
        id: '2.1.2',
        level: 'A',
        title: 'No Keyboard Trap',
        description: 'Focus trapped within modal but can exit via Escape or close button. Focus returns to trigger on close.'
      },
      {
        id: '2.4.3',
        level: 'A',
        title: 'Focus Order',
        description: 'Focus moves to first focusable element in modal on open. Logical tab order maintained.'
      },
      {
        id: '2.4.7',
        level: 'AA',
        title: 'Focus Visible',
        description: 'All focusable elements have visible focus indicators.'
      },
      {
        id: '4.1.2',
        level: 'A',
        title: 'Name, Role, Value',
        description: 'Uses role="dialog" with aria-modal="true". Title referenced via aria-labelledby. Content via aria-describedby.'
      }
    ],
    ariaAttributes: [
      {
        name: 'role="dialog"',
        purpose: 'Identifies the element as a dialog container',
        usage: 'Applied to modal content wrapper. Announces to screen readers that this is a dialog.'
      },
      {
        name: 'aria-modal',
        purpose: 'Indicates that content behind is inert',
        usage: 'Set to "true". Tells assistive technologies that only modal content is interactive.'
      },
      {
        name: 'aria-labelledby',
        purpose: 'Provides accessible name for the dialog',
        usage: 'References the modal title element. Screen readers announce this when modal opens.'
      },
      {
        name: 'aria-describedby',
        purpose: 'Provides additional description of dialog purpose',
        usage: 'Optional. Can reference content that describes the modal\'s purpose.'
      }
    ],
    keyboardSupport: [
      { key: 'Escape', action: 'Closes the modal and returns focus to trigger element' },
      { key: 'Tab', action: 'Moves focus to next focusable element within modal (cycles at end)' },
      { key: 'Shift + Tab', action: 'Moves focus to previous focusable element (cycles at start)' }
    ],
    features: [
      'Focus trap keeps keyboard navigation within modal',
      'Focus returns to triggering element on close',
      'Escape key closes modal',
      'Click outside (backdrop) closes modal',
      'Prevents body scroll when open',
      'Visible close button with accessible label',
      'Flexible sizing options',
      'Smooth open/close transitions'
    ]
  },
  {
    id: 'alert',
    name: 'Alert / Notification',
    description: 'An accessible alert component with proper ARIA live regions for dynamic content announcements.',
    wcagCriteria: [
      {
        id: '1.3.1',
        level: 'A',
        title: 'Info and Relationships',
        description: 'Alert structure communicated through proper ARIA roles and semantic HTML.'
      },
      {
        id: '1.4.1',
        level: 'A',
        title: 'Use of Color',
        description: 'Information conveyed with icons and text, not color alone. Each variant has unique icon.'
      },
      {
        id: '4.1.3',
        level: 'AA',
        title: 'Status Messages',
        description: 'Status changes announced via aria-live regions. Assertive for errors/warnings, polite for info/success.'
      }
    ],
    ariaAttributes: [
      {
        name: 'role',
        purpose: 'Identifies the type of alert',
        usage: 'Set to "alert" for errors/warnings (assertive), "status" for info/success (polite).'
      },
      {
        name: 'aria-live',
        purpose: 'Controls how updates are announced',
        usage: 'Set to "assertive" for urgent messages (errors), "polite" for non-urgent (info/success).'
      },
      {
        name: 'aria-atomic',
        purpose: 'Ensures entire alert content is announced',
        usage: 'Set to "true" so screen readers announce complete message, not just changes.'
      }
    ],
    keyboardSupport: [
      { key: 'Tab', action: 'Moves focus to dismiss button (if dismissible)' },
      { key: 'Enter / Space', action: 'Dismisses alert when dismiss button is focused' }
    ],
    features: [
      'Four variants: info, success, warning, error',
      'Distinct icons for each variant',
      'Appropriate ARIA live regions for dynamic announcements',
      'Optional title for alert heading',
      'Dismissible alerts with accessible close button',
      'Color contrast meets WCAG AA standards',
      'Information conveyed through multiple means (not color alone)'
    ]
  },
  {
    id: 'navigation',
    name: 'Navigation Menu',
    description: 'An accessible navigation menu with dropdown support, full keyboard navigation, and proper ARIA patterns.',
    wcagCriteria: [
      {
        id: '2.1.1',
        level: 'A',
        title: 'Keyboard',
        description: 'Full keyboard navigation. Arrow keys navigate menus, Enter/Space activate, Escape closes.'
      },
      {
        id: '2.4.3',
        level: 'A',
        title: 'Focus Order',
        description: 'Logical tab order through navigation items. Submenu focus managed correctly.'
      },
      {
        id: '2.4.7',
        level: 'AA',
        title: 'Focus Visible',
        description: 'All navigation items have visible focus indicators.'
      },
      {
        id: '4.1.2',
        level: 'A',
        title: 'Name, Role, Value',
        description: 'Uses nav element with aria-label. Dropdowns use aria-expanded and aria-haspopup. Submenus use role="menu".'
      }
    ],
    ariaAttributes: [
      {
        name: 'aria-label',
        purpose: 'Provides accessible name for navigation landmark',
        usage: 'Applied to nav element. Defaults to "Main navigation" but customizable.'
      },
      {
        name: 'aria-expanded',
        purpose: 'Indicates whether dropdown menu is open or closed',
        usage: 'Set to "true" when submenu visible, "false" when hidden. Applied to parent button.'
      },
      {
        name: 'aria-haspopup',
        purpose: 'Indicates that element has a popup menu',
        usage: 'Set to "true" on buttons with dropdown menus.'
      },
      {
        name: 'role="menu"',
        purpose: 'Identifies dropdown as a menu widget',
        usage: 'Applied to dropdown container. Changes keyboard interaction expectations.'
      },
      {
        name: 'role="menuitem"',
        purpose: 'Identifies items within dropdown menu',
        usage: 'Applied to each link/button in dropdown. Conveys menu structure.'
      }
    ],
    keyboardSupport: [
      { key: 'Tab', action: 'Moves focus between top-level navigation items' },
      { key: 'Enter / Space', action: 'Opens dropdown menu or activates link' },
      { key: 'Arrow Down', action: 'Opens dropdown or moves to next item in dropdown' },
      { key: 'Arrow Up', action: 'Moves to previous item in dropdown' },
      { key: 'Escape', action: 'Closes dropdown and returns focus to parent button' },
      { key: 'Home', action: 'Moves focus to first item in dropdown' },
      { key: 'End', action: 'Moves focus to last item in dropdown' }
    ],
    features: [
      'Semantic nav element for landmark navigation',
      'Nested dropdown support with proper ARIA',
      'Full keyboard navigation with arrow keys',
      'Click outside to close dropdowns',
      'Focus management for submenus',
      'Hover and keyboard interaction',
      'Customizable aria-label for multiple navs',
      'Visual indicators for expanded state'
    ]
  }
];
