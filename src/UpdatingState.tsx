import { useState } from "react";
import "./App.css";

function UpdatingState() {
    const [game, setGame] = useState({
        id: 1201,
        player: {
            name: "Stan",
        },
    });

    const handleClickGame = () => {
        setGame({ ...game, player: { ...game.player, name: "Nats" } });
    };

    const [pizza, setPizza] = useState({
        name: "Spicy Pepperoni",
        toppings: ["Mushroom"],
    });

    const handleClickPizza = () => {
        setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
    };

    const [cart, setCart] = useState({
        discount: 0.5,
        items: [
            { id: 1, title: "Product 1", quantity: 1 },
            { id: 2, title: "Product 2", quantity: 5 },
        ],
    });

    const handleClickCart = () => {
        setCart({
            ...cart,
            items: cart.items.map((item) =>
                item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
            ),
        });
    };

    return (
        <>
            <div className="flex flex-col justify-center gap-2 m-5">
                <h1>Game ID: {game.id}</h1>
                <p>Player: {game.player.name}</p>
                <button
                    className="p-2 rounded border border-blue-500 bg-blue-200 self-center"
                    onClick={handleClickGame}
                >
                    Update Player Name
                </button>
            </div>

            <div className="flex flex-col justify-center gap-2 m-5">
                <h1>PIZZA ORDER: {pizza.name}</h1>
                <p>Toppings: {pizza.toppings.join(", ")}</p>
                <button
                    className="p-2 rounded border border-blue-500 bg-orange-400 self-center"
                    onClick={handleClickPizza}
                >
                    Order
                </button>
            </div>

            <div className="flex flex-col justify-center gap-2 m-5">
                <h1>CART</h1>
                <p>Discount: {cart.discount}</p>
                <div>
                    {cart.items.map((item) => (
                        <div key={item.id}>
                            {item.title} - Quantity: {item.quantity}
                        </div>
                    ))}
                </div>
                <button
                    className="p-2 rounded border border-blue-500 bg-green-400 self-center"
                    onClick={handleClickCart}
                >
                    Update Cart
                </button>
            </div>
        </>
    );
}

export default UpdatingState;
