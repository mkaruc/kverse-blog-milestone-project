import logo from './logo.svg';
import './App.css';
import AuthContext from '../src/contexts/AuthContext';
import AppRouter from './app-router/AppRouter';
import { ToastContainer } from 'react-toastify';
import BlogContextProvider from './contexts/BlogContextProvider';

function App() {
  return (
    <div>
      <BlogContextProvider>
      <AuthContext>
        <AppRouter />
        <ToastContainer />
      </AuthContext>
      </BlogContextProvider>
    </div>
  );
}

export default App;
