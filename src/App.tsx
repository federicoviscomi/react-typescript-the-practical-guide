import Input from './components/Input.tsx';
import { useRef } from 'react';

export default function App() {
  const input = useRef<HTMLInputElement>(null);
  
  return (
    <main>
      <Input label="test" id="test" ref={input}>
      </Input>
    </main>
  );
}
