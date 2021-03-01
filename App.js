import { useState } from 'react';

function App() {
  const[imput,setInput]=useState('');
  
  const[texto,setTexto]=useState([
    "Vamos pagar nossas contas",
    'Estudar hocks'
  ]);


  function inserir() {
   setTexto([...texto,imput]);
   setInput('');
  }


  return ( 
    <div>
      <nav>
        {texto.map(texto=>(
            <li key={texto}>{texto}</li>
        ))}  
      </nav>
      <input type="text" value={imput} onChange={(e=>setInput(e.target.value) )} />
      <button type="button" onClick={inserir}>Inserir nomes</button>
    </div>
  );
}

export default App;
