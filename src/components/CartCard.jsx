import styles from '../styles/CartCard.module.css';
import PropTypes from 'prop-types';

const CartCard = ({ item, increment, decrement, remove }) => {
    return (
        <div className={styles.container}>
            <img className={styles.cartImg} src={item.image} alt="" />
            <p>{item.title}</p>
            <p className={styles.price}>${item.price}</p>
            <div className={styles.quantityContainer}>
                <button onClick={() => decrement(item.id)} className={styles.increment}>-</button>
                <span className={styles.quantity}>{item.quantity}</span>
                <button onClick={() => increment(item.id)} className={styles.increment}>+</button>
            </div>
            <p className={styles.totalPrice}>${(item.price * item.quantity).toFixed(2)}</p>
            <button onClick={() => remove(item.id)}>X</button>
        </div>
    );
};

CartCard.propTypes = {
    item: PropTypes.object,
    increment: PropTypes.func,
    decrement: PropTypes.func,
    remove: PropTypes.func
};
export default CartCard;