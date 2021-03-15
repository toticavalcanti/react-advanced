import React, { useRef, useEffect, useState } from 'react';

function App (){
  const inputRef = useRef()
  const count = useRef(1)
  const [, setValue] = useState(false)

  const handleClick = () => {
    inputRef.current.focus()
    console.log('inputRef.current: ', inputRef)
  }

  useEffect(() => {
    setTimeout(() => {
      console.log('Passou aqui!')
      count.current = 300
      setValue(true)
    }, 3000)
  })
  return(
    <>
      <h1>Valor do count { count.current }</h1>
      Foco: <input ref={ inputRef } />
      <br />
      <br />
      <button onClick={handleClick}>Focar</button>
    </>
  )
}

export default App;