import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App/App';
import CommonStyles from './styles/common.styles';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
    <CommonStyles />
  </StrictMode>,
);
