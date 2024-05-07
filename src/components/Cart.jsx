import { useOutletContext } from "react-router-dom";
import CartCard from "./CartCard";
import styles from '../styles/Cart.module.css';

const Cart = () => {
    const [cart, setCart] = useOutletContext();
    let total = 0;

    const removeFromCart = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
    };

    const incrementQuantity = (id) => {
        const updatedCart = cart.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCart(updatedCart);
    };

    const decreaseQuantity = (id) => {
        const updatedCart = cart.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
        );
        setCart(updatedCart);
    };

    const cartItems = cart.map((item) => {
        total += item.price * item.quantity;
        return <CartCard
            key={item.id}
            item={item}
            increment={incrementQuantity}
            decrement={decreaseQuantity}
            remove={removeFromCart}
        />;
    });

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Cart</h1>
            <div className={styles.columnHeaders}>
                <p>Product</p>
                <p>Unit Price</p>
                <p>Quantity</p>
                <p>Total Price</p>
                <p>Remove From Cart</p>
            </div>
            <div>{cartItems}</div>
            <h3 className={styles.total}>Total: ${total.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;