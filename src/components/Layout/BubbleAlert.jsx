import { Component } from "react";

const styles = {
    bubbleAlert: {
        backgroundColor: '#E9725A',
        borderRadius: '15px',
        color: '#fff',
        padding: '2px 10px',
        fontSize:'0.9rem',
        width: '20px'
    }
}
class BubbleAlert extends Component {
    getNumberNotification(number) {
        if(!number) {return ''};
        return number > 9  ? '9+' : number;
    }
    render(){
        const {value} = this.props;
        return(
            <span style={styles.bubbleAlert}>
                {this.getNumberNotification(value)}
            </span>
        )
    }
}
export default BubbleAlert;