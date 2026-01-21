import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';
import { useState } from 'react';

function App() {
  const n = 15;
  const [name] = useState('Raul');
  const redTitle = true;

  return (
    <div className="App">
      {/* CSS global */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponent />
      <p>Este parágrafo é do App.js</p>
      {/* Inline CSS */}
      <p
        style={{
          color: 'blue',
          padding: '25px',
          borderTop: '2px solid red'
        }}
      >
        Este elemento foi estilizado de forma inline.
      </p>
      {/* CSS Inline Dinâmico */}
      <h2 style={n < 10 ? ({ color: 'purple'}) : ({ color: 'pink'})}>
        CSS Dinâmico
      </h2>
      <h2 style={n > 10 ? ({ color: 'purple'}) : ({ color: 'pink'})}>
        CSS Dinâmico
      </h2>
      <h2 style={name === 'Raul' ? ({ color: 'green', backgroundColor: '#000'}) : null}>
        Teste nome
      </h2>
      {/* Classe dinâmica */}
      <h2 className={redTitle ? 'red-title' : 'title'}>Este título vai ter classe dinÂmica</h2>
      {/* CSS Modules */}
      <Title />
    </div>
  );
}

export default App;
