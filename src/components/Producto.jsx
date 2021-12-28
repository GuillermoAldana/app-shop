import { Component } from "react";
import Button from './Button';
const styles = {
    producto: {
        border: 'solid 1px #eee',
        boxShadow: '0 5px 5px rgb(0 ,0 ,0 ,0.1)',
        width: '20%',
        padding: '10px 15px',
        borderRadius: '5px'
    },
    img: {
        width: '100%'
    }
}
class Producto extends Component {

    render(){
        const { producto, addCart } = this.props;

        return(
            <div style={styles.producto}>
               <img alt={producto.name} src={producto.img} style={styles.img}/>
               <h3>{producto.name}</h3>
               <p>{producto.price}</p>
               <Button onClick={() => addCart(producto)}>
                    Agregar al carrito
               </Button>
            </div>
        )
    }
}
export default Producto;