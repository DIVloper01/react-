import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import Store from './store'
import Counter from './Counter.jsx'
const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Provider store={Store}>
      <Counter></Counter>
    </Provider>
  </StrictMode>
)