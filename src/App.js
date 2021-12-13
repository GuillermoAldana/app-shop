import { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    productos: [
      { name: 'Tomate', price: 1500, img: '/productos/tomate.jpg' },
      { name: 'Arbejas', price: 1200, img: '/productos/Arbejas.jpg' },
      { name: 'Naranja', price: 1100, img: '/productos/naranja.jpg' },
      { name: 'Lechuga', price: 1800, img: '/productos/lechuga.jpg' },
    ]
  }
  render() {
    return (
      <div>
        <p>Hola Mundo</p>
      </div>
    )
  }

}

export default App;
