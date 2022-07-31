import logo from './logo.svg';
import './App.css';
import AuthContextProvider from '../src/contexts/AuthContext';
import AppRouter from './app-router/AppRouter';
import { ToastContainer } from 'react-toastify';
import BlogContextProvider from './contexts/BlogContext';

function App() {
  return (
    <div>
      <BlogContextProvider>
      <AuthContextProvider>
        <AppRouter />
        <ToastContainer />
      </AuthContextProvider>
      </BlogContextProvider>
    </div>
  );
}

export default App;
