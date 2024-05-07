import { useState } from "react";
import NavBar from "./components/NavBar.jsx";
import { Outlet } from "react-router-dom";

const App = () => {
  const [cart, setCart] = useState([]);

  let totalItems = 0;
  if (cart.length > 0) {
    totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  }

  return (
    <>
      <NavBar numItems={totalItems} />
      <Outlet context={[cart, setCart]} />
    </>
  );
};

export default App;