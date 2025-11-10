import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the global stylesheet
import './index.css'

// Find the root HTML element and render the App component inside it
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

