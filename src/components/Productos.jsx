import { Component } from "react";
import Producto from './Producto';
class Productos extends Component {

    render() {
        const { productos, addCart } = this.props;
        return (
            <div>
                {productos.map((producto) =>
                    <Producto
                        addCart={addCart}
                        key={producto.name}
                        producto={producto}
                    />
                )}
            </div>
        )
    }
}
export default Productos;