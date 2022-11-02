import './App.css';
import Lista from './componentes/lista';
import FeecodeCampLogo from "./img/freecodecamp-logo.png";
import { GiAbstract058 } from "react-icons/gi";
import { render } from 'react-dom';

function App() {
  return(
    <div className='App'>
      <GiAbstract058/>
      <div className='freecodecamp-logo-contenedor'>
        <img src={FeecodeCampLogo} className='freecodecamp-logo'/>
        <h1 id='titulo'>Escribe tus tareas</h1>
      </div>
      <Lista/>
    </div>
  );
}

export default App;