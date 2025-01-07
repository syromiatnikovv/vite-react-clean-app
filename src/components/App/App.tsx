import { useState } from 'react';
import { AppHeader, AppLogo, AppWrapper } from './App.styles';
import logo from './logo.svg';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <AppWrapper>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <p>React clean app</p>
        <button type="button" onClick={() => setCount((c) => c + 1)}>
          count is {count}
        </button>
      </AppHeader>
    </AppWrapper>
  );
}
