import { useState } from "react";
import NavBar from "./components/NavBar.jsx";
import { Outlet } from "react-router-dom";
import styles from './App.module.css';

const App = () => {
  const [cart, setCart] = useState([]);

  let totalItems = 0;
  if (cart.length > 0) {
    totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  }

  return (
    <div className={styles.app}>
      <NavBar numItems={totalItems} />
      <Outlet context={[cart, setCart]} />
    </div>
  );
};

export default App;