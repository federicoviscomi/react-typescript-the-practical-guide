import Input from './components/Input.tsx';
import Form from './components/Form.tsx';
import Button from './components/Button.tsx';

export default function App() {
  const handleSave = (data: unknown) => {
    const extractedData = data as {name: string, age: number};

  };
  return (
    <main>
      <Form onSave={handleSave}>
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
