import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Card from "./Card.jsx";
import styles from '../styles/Shop.module.css';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error('Server Error');
                }
                return response.json();
            })
            .then((response) => setProducts(response))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);

    return { products, error, loading };
};

const Shop = () => {
    const [cart, setCart] = useOutletContext();

    const { products, error, loading } = useProducts();

    const addToCart = (newItem, quantity) => {
        if (quantity === 0 || !quantity) {
            return;
        }
        const itemIndex = cart.findIndex((item) => item.id === newItem.id);
        if (itemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[itemIndex].quantity += quantity;
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...newItem, quantity }]);
        }
    };

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h3>A network error has occured</h3>;


    const productList = products.map((product) => {
        return <Card key={product.id} product={product} onAddToCart={addToCart} />;
    });

    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Shop</h2>
            <div className={styles.productGrid}>
                {productList}
            </div>
        </div>
    );

};

export default Shop;