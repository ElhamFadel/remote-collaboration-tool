import './App.css';
import Auth from './pages/Auth';
import UseAuthProvider from './hooks/useAuthProvider';

function App() {
  return (
    <UseAuthProvider>
      <Auth />
    </UseAuthProvider>
  );
}

export default App;
