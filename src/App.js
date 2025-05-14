// App.js
import React from 'react';
import './styles.css';
import './index.css'; // Importamos ambos os CSS para garantir compatibilidade
import BingoGame from './components/BingoGame';

function App() {
  return (
    <div className="App">
      <BingoGame />
    </div>
  );
}

export default App;