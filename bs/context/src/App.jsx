// App.jsx
import './App.css'
import Form from './Form'
import { useReducer } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [action.payload, ...state]
    case 'DELETE':
      return state.filter((_, i) => i !== action.payload)
    default:
      return state
  }
}

function App() {
  const [dataR, dispatch] = useReducer(reducer, [])
  fetch('')
  function HandleData(item) {
    dispatch({ type: 'ADD', payload: item })
  }

  function handleDelete(index) {
    dispatch({ type: 'DELETE', payload: index })
  }

  return (
    <>
      <Form
        handleFunction={HandleData}
        data={dataR}
        handleDelete={handleDelete}
      />
    </>
  )
}

export default App
