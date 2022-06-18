import './App.css';
import Navigation from './components/Navigation';
import UseAuthProvider from './hooks/useAuthProvider';

function App() {
  return (
    <UseAuthProvider>
      <Navigation />
    </UseAuthProvider>
  );
}

export default App;
