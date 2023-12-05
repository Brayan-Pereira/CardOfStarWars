import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App title = "Pôster: Star Wars (1977)" urlImage = "https://i.pinimg.com/originals/ba/94/64/ba9464145eba8762f6286a3c8387c951.jpg"/>
    <App title = "Pôster: The Batman" urlImage = "https://img.elo7.com.br/product/main/3FBA809/big-poster-filme-batman-2022-90x60-cm-lo002-poster-batman.jpg"/>
    <App title = "Pôster: flash of the future"  urlImage = "https://m.media-amazon.com/images/I/91Gw9Wc3jrL._AC_SY606_.jpg"/>
  </React.StrictMode>,
)
