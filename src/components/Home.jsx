import styles from '../styles/Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className={styles.container}>
            <h1>Home</h1>
            <h2>Welcome to the Store!</h2 >
            <Link to='shop' className={styles.link}>Go To Shop</Link>
        </div >
    );

};

export default Home;