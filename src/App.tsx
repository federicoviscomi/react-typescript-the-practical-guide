import Input from './components/Input.tsx';
import Form, { FormHandle } from './components/Form.tsx';
import Button from './components/Button.tsx';
import { useRef } from 'react';

export default function App() {
  const customForm = useRef<FormHandle>(null);

  const handleSave = (data: unknown) => {
    const extractedData = data as {name: string, age: number};
    customForm.current?.clear();
  };
  
  return (
    <main>
      <Form onSave={handleSave} ref={customForm}>
        <Input type="text" label="Name" id="name">
        </Input>
        <Input type="number" label="Age" id="age">
        </Input>
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}
