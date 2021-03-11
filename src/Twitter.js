import React, { useEffect, useState, memo } from 'react'

// shouldComponentUpdate
const areEqual = (prevProps, nextProps) => {
  return prevProps.loading === nextProps.loading
}

function Twitter(props) {
  const { loading } = props
  const [tweet, setTweet] = useState()
  
  //componentDidMount, por causa do array vazio  
  //no segundo argumento, só executa uma vez
  useEffect(() => {
    const { posts, loading } = props
    console.log('componentDidMount', posts)
    console.log('componentDidMount:loading', loading)
  }, [])

  // componentDidUpdate, toda vez que o loading for alterado
  // o componente vai passar aqui dentro 
  useEffect(() => {
    console.log('componentDidUpdate', loading)
  }, [loading])

  //componentWillUnmount
  useEffect(() => {
    // tudo que tiver sendo retornado dentro do userEffect
    // é a parte do componentWillUnmount
    return () => {
      console.log('componentWillUnmount: fui removido :(')
    }
  }, [])

  const handleTweet = () => {
    setTweet('Tweet atualizado')
  }

  console.log('Tweet atualizado:', tweet)
  return (
    <div>
      <button onClick={handleTweet}>Re-render</button>
      tests
    </div>
    )
}

export default memo(Twitter, areEqual)