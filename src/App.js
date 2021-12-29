import { Component } from 'react';
import Productos from './components/Producto/Productos';
import Layout from './components/Layout/Layout';
import Title from './components/Layout/Title';
import NavBar from './components/Nav/NavBar';
import './App.css';

class App extends Component {
  state = {
    productos: [
      { name: 'Tomate', price: 1500, img: '/productos/tomate.jpg' },
      { name: 'Arbejas', price: 1200, img: '/productos/Arbejas.jpg' },
      { name: 'Lechuga', price: 1800, img: '/productos/lechuga.jpg' },
    ],
    carrito: [],
  }
  addCartList = (producto) => {
    const {carrito} = this.state;
    if(carrito.find(item => item.name === producto.name))
    {
      const newCarrito = carrito.map(x => x.name === producto.name ?
        ({ 
        ...x,
        cantidad: x.cantidad +1 })
        :
        x)
        return this.setState({carrito: newCarrito}) 
    }
    return this.setState({
      carrito: this.state.carrito.concat({
        ...producto,
        cantidad: 1,
      })
    });

  }
  render() {
    return (
      <div>
        <NavBar carrito={this.state.carrito}/>
        <Layout>
          <Title />
          <Productos
            addCart={this.addCartList}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    )
  }

}

export default App;
