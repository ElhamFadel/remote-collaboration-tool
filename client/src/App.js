import './App.css';
import Space from './pages/Space';
import UseAuthProvider from './hooks/useAuthProvider';

function App() {
  return (
    <UseAuthProvider>
      <Space />
    </UseAuthProvider>
  );
}

export default App;
