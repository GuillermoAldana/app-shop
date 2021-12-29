import { Component } from "react";
import Logo from '../Layout/Logo';
import Carrito from '../Cart/Carrito';
const styles = {
    navBar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100px',
        justifyContent: 'space-between',
        position: 'relative',
        padding: '0 50px',
        boxShadow: '0 2px 3px rgb(0,0,0,0.1)'
    }
}
class NavBar extends Component {
   
    render() { 
        const {carrito, isCartActive, showCartList} = this.props;
        return(
            <nav style={styles.navBar}>
                <Logo />
                <Carrito 
                carrito={carrito} 
                isCartActive={isCartActive} 
                showCartList={showCartList} />
            </nav>
        )
    }
}
export default NavBar;