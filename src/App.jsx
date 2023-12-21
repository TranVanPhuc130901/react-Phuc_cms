import { RouterProvider } from 'react-router-dom';
import './styles/App.css';
import RootRouter from './routes/routes';
import store from './redux/store';
import ProtectedRoute from './routes/rootRouter';
import { Provider } from 'react-redux';

function App() {
  return(
    <Provider store={store}>
      <RouterProvider router={RootRouter} />;
    </Provider>
  ) 
}

export default App;
