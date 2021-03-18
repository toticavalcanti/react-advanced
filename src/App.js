import React from 'react';
import Button from './components/Button'
function App(){

  const handleClick = () => {
    console.log('Adicionado no carrinho')
  }

  return(
    <Button
      onClick={handleClick}
    >
      Adicionar ao carrinho
    </Button>
  )
}

export default App;