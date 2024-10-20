import logo from './logo.svg';
import './App.css';
import Componente from './component';
import Navbar from './navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="text-center mt-5">
        <h1>Bienvenido a Eventia</h1>
        <p className="lead">Explora eventos socioculturales cerca de ti.</p>
      </header>
    </div>
  );
}

export default App;
