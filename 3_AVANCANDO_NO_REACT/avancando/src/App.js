import './App.css';
import Lago from './assets/img.jpg';
import ManageData from './components/ManageData';

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img.jpg" alt="Mata" />
      </div>
      {/* Imagem em assets */}
      <div>
        <img src={Lago} alt="Lago"/>
      </div>
      <ManageData />
    </div>

  );
}

export default App;
