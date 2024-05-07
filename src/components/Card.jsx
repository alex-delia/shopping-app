import styles from '../styles/Card.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Card = ({ product, onAddToCart }) => {
    const [value, setValue] = useState(0);

    const handleChange = (e) => {
        const inputValue = e.target.value;
        if (/^\d*$/.test(inputValue)) {
            setValue(inputValue);
        };
    };

    const handlePlus = () => {
        if (!value) {
            setValue(1);
            return;
        }
        setValue((v) => parseInt(v) + 1);
    };

    const handleMinus = () => {
        if (value > 0) {
            setValue((v) => parseInt(v) - 1);
        }
    };

    return (
        <div className={styles.card}>
            <img src={product.image} alt="" />
            <p>{product.title}</p>
            <p className={styles.price}>${product.price}</p>
            <div className={styles.quantityContainer}>
                <button onClick={handleMinus} className={styles.increment}>-</button>
                <input type="text" value={value} className={styles.quantity} onChange={handleChange} />
                <button onClick={handlePlus} className={styles.increment}>+</button>
            </div>
            <button className={styles.addToCart} onClick={() => onAddToCart(product, parseInt(value))}>Add To Cart</button>
        </div >
    );
};

Card.propTypes = {
    product: PropTypes.object,
    onAddToCart: PropTypes.func
};

export default Card;