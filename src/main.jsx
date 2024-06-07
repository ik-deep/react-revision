import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TodoProvider from './contexts/TodoContext.jsx'
import UserProvider from './contexts/UserContext.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <TodoProvider>
      <UserProvider>
      <App />
      </UserProvider>

    </TodoProvider>
   </Provider>
  // </React.StrictMode>,
)
