import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
import Routes from './routes';
import DataProvider from './contexts/data';
import './styles/global.css';

function App() {
  return (
    <Router>
      <DataProvider>
        <Routes />
      </DataProvider>
    </Router>
  );
}

export default App;
