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
        return(
            <div>
                <span style={styles.bubble}>
                    <BubbleAlert />
                </span>
                <button style={styles.carrito}>
                    Carro
                </button>
            </div>
        )
    }
}
export default Carrito;