import React from "react";

interface Props {
    cartItems: string[];
    onClear: () => void;
}

const Cart = ({ cartItems, onClear }: Props) => {
    return (
        <div className="flex gap-5 items-center">
            <h1>Cart :</h1>
            <ul className="border-0 rounded outline-none bg-blue-300 h-12 w-30">
                {cartItems.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <button
                className="p-2 border rounded border-black-500 bg-gray-300"
                onClick={onClear}
            >
                Clear
            </button>
        </div>
    );
};

export default Cart;
