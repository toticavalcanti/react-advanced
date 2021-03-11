import React, { useContext } from 'react';
import { ThemeContext } from './theme';
function Form() {
  const context = useContext(ThemeContext)
  const renderForm = (
    <form>
      <label>Nome:</label>
      <input />
      <label>E_mail:</label>
      <input />
      <label>Idade:</label>
      <input />
      <label>Telefone:</label>
      <input />
    </form>
  )

  const renderNotLogged = (
    <h1>
      É necessário realizar o login!
    </h1>
  )
  return(
    <div>
      {!context.token ? renderNotLogged : renderForm}
    </div>
  )
}

export default Form;