import ReactDOM from 'react-dom/client';
import App from './pages/App.jsx';
import './styles/global.scss';
import { AppProvider } from '../Context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <App />
  </AppProvider>
);
