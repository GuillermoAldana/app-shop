import { Component } from "react";
import BubbleAlert from './BubbleAlert';
const styles = {
    carrito: {
        backgroundColor: '#359A2C',
        color: '#fff',
        border:' none',
        padding: '15px',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    bubble: {
        position: 'relative',
        left: 12,
        top: 20,
    }
}
class Carrito extends Component {
    render(){
        const {carrito} = this.props;
        const cantidad = carrito.reduce((acc, element) => acc + element.cantidad, 0);
        return(
            <div>
                <span style={styles.bubble}>
                    {cantidad !== 0 ? <BubbleAlert value={cantidad}/> : null}
                </span>
                <button style={styles.carrito}>
                    Carro
                </button>
            </div>
        )
    }
}
export default Carrito;