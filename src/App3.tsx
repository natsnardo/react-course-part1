import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

function App3() {
    const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

    return (
        <div className="flex justify-center items-center gap-5">
            <Navbar cartItemsCount={cartItems.length} />
            <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
        </div>
    );
}

export default App3;
