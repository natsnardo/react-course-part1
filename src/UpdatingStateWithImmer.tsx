import { useState } from "react";
import { produce } from "immer";
import "./App.css";

function UpdatingStateWithImmer() {
    const [game, setGame] = useState({
        id: 1201,
        player: {
            name: "Stan",
        },
    });

    const handleClickGame = () => {
        setGame(
            produce((draft) => {
                draft.player.name = "Nats";
            })
        );
    };

    const [pizza, setPizza] = useState({
        name: "Spicy Pepperoni",
        toppings: ["Mushroom"],
    });

    const handleClickPizza = () => {
        setPizza(
            produce((draft) => {
                draft.toppings.push("Cheese");
            })
        );
    };

    const [cart, setCart] = useState({
        discount: 0.5,
        items: [
            { id: 1, title: "Product 1", quantity: 1 },
            { id: 2, title: "Product 2", quantity: 5 },
        ],
    });

    const handleClickCart = (targetId: number) => {
        setCart(
            produce((draft) => {
                const item = draft.items.find((item) => item.id === targetId);
                if (item) item.quantity++;
            })
        );
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
                <div className="flex flex-col justify-center items-center gap-4">
                    {cart.items.map((item) => (
                        <div key={item.id} className="flex items-center gap-4">
                            <span>
                                {item.title} - Quantity: {item.quantity}
                            </span>
                            <button
                                className="p-1 rounded border border-blue-500 bg-blue-200 text-sm"
                                onClick={() => handleClickCart(item.id)}
                            >
                                Add Item
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default UpdatingStateWithImmer;
