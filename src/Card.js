import React, { useContext } from 'react';
import { ThemeContext, themes } from './theme';
import Form from './Form';

function Card() {
  const theme = useContext(ThemeContext)
  console.log("Theme:Values ", theme)
  return(
    <div style={{ padding: '50px' }}>
      <Form />
      <button style={{ background: themes.background, color: themes.color }}>Card button</button>
    </div>
  )
}

export default Card;