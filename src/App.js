import { Component } from 'react';
import Productos from './components/Productos';
import Layout from './components/Layout';
import Title from './components/Title';
import './App.css';

class App extends Component {
  state = {
    productos: [
      { name: 'Tomate', price: 1500, img: '/productos/tomate.jpg' },
      { name: 'Arbejas', price: 1200, img: '/productos/Arbejas.jpg' },
      { name: 'Lechuga', price: 1800, img: '/productos/lechuga.jpg' },
    ]
  }
  render() {
    return (
      <div>
        <Layout>
          <Title />
          <Productos 
          addCart={() => console.log('wait product')}
          productos={this.state.productos}
          />
        </Layout>
      </div>
    )
  }

}

export default App;
