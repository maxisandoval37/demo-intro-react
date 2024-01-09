import './App.css';
import {SaludarComponente, SaludarConNombreComponente, SaludarConNombreComponenteDestructurado1, SaludarConNombreComponenteDestructurado2}  from './components/PrimerComponente';
import {CounterConEstados} from './components/Counter';

function App() {

  const nombre = "Maxi";
  const email = <a href="mailto:maxisandoval@gmail.com">maxisandoval@gmail.com</a>

  const nombreUsuario = <p>Vanesa</p>;
  const apellidoUsuario = <p>Mayonesa</p>;
  const nombreCompletoUsuario = <b>{nombreUsuario}{apellidoUsuario}</b>


  return (
    <div className="App">
      <header className="App-header">
        <h2>{nombre} :)</h2>
        {email}
        {nombreCompletoUsuario}

        <SaludarComponente/>
      </header>

      <SaludarConNombreComponente nombre="Jorge" edad={99}/>
      <SaludarConNombreComponente nombre="Nicolas" edad={100}/>
      <SaludarConNombreComponenteDestructurado1 nombre="Federico" edad={101}/>
      <SaludarConNombreComponenteDestructurado2 nombre="Camila" edad={102}/>

      <h2>------------------</h2>
      <CounterConEstados/>
    </div>
  );
}

export default App;
