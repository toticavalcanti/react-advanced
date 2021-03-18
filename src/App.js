import React, { useState } from 'react';
import Button from './components/Button';
import Calc from './components/Calc';

function App(){

  const [value, setValue] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(30);

  const handleClick = () => {
    setMin(10)
  }

  const handleCalc = ( target ) => { 
    const value = target.value
    setValue(min + max + value)
  }

  return(
    <>
      <div>
        <Button
          onClick={handleClick}
        >
          Adicionar ao carrinho
        </Button>
      </div>
      <br />
      <div>
        <h1>Valor calculado: {value}</h1>
        <Calc 
          min={min}
          max={max}
          onChange={handleCalc}
        />
      </div>
    </>
  )
}

export default App;