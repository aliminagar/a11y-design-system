import { useState } from 'react';
import { Sidebar } from './docs/Sidebar';
import { ButtonDemo } from './demos/ButtonDemo';
import { InputDemo } from './demos/InputDemo';
import { CheckboxDemo } from './demos/CheckboxDemo';
import { RadioGroupDemo } from './demos/RadioGroupDemo';
import { SelectDemo } from './demos/SelectDemo';
import { ModalDemo } from './demos/ModalDemo';
import { AlertDemo } from './demos/AlertDemo';
import { NavigationDemo } from './demos/NavigationDemo';

function App() {
  const [activeComponent, setActiveComponent] = useState('button');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'button':
        return <ButtonDemo />;
      case 'input':
        return <InputDemo />;
      case 'checkbox':
        return <CheckboxDemo />;
      case 'radio-group':
        return <RadioGroupDemo />;
      case 'select':
        return <SelectDemo />;
      case 'modal':
        return <ModalDemo />;
      case 'alert':
        return <AlertDemo />;
      case 'navigation':
        return <NavigationDemo />;
      default:
        return <ButtonDemo />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeComponent={activeComponent} onSelect={setActiveComponent} />
      <main className="flex-1 overflow-y-auto" role="main">
        {renderComponent()}
      </main>
    </div>
  );
}

export default App;
