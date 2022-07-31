import logo from './logo.svg';
import './App.css';
import AuthContextProvider from '../src/contexts/AuthContext';
import AppRouter from './app-router/AppRouter';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <AppRouter />
        <ToastContainer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
