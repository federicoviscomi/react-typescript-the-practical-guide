import Input from './components/Input.tsx';
import Button from './components/Button.tsx';

export default function App() {
  return (
    <main>
      <p>
        <Button el="button">A button</Button>
      </p>
      <p>
        <Button el="anchor" href="https://google.com">A link</Button>
      </p>
      <Input id="name" label="insert name" type="text"></Input>
      <Input id="age" label="age here" type="number"></Input>
    </main>
  );
}
