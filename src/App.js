import React from 'react'
import Petshop from './Petshop';

function App() {

  const handleClick = () => {
    console.log('Iniciando o banho...')
  }

  return(
    <div>
      <Petshop 
        dogs={2} 
        customerName = "Toti Cavalcanti"
        onClick={handleClick}
        />
    </div>
  )
}

export default App;