import { RouterProvider } from 'react-router-dom';
import './styles/App.css';
import RootRouter from './routes/routes';

function App() {
  return <RouterProvider router={RootRouter} />;
}

export default App;
