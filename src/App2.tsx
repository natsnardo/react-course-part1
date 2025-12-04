import { useState } from "react";
import "./App.css";
import Message from "./Message";
import { produce } from "immer";

function App2() {
    const [firstName, setFirstName] = useState("Stan");
    const [lastName, setLastName] = useState("Odran");
    const fullName = firstName + " " + lastName;
    const [person, setPerson] = useState({
        firstName: "",
        lastName: "",
    });

    const [isLoading, setLoading] = useState(false);

    /** UPDATING OBJECTS */
    const [drink, setDrink] = useState({
        title: "Americano",
        price: 5,
    });

    /** Initial handleClick */
    // const handleClick = () => {
    //     const newDrink = {
    //         title: drink.title,
    //         price: 9,
    //     };
    //     setDrink(newDrink);
    // };

    /** Optimized handleClick */
    const handleClickDrink = () => {
        setDrink({ ...drink, price: 9 });
    };

    /** UPDATING NESTED OBJECTS */
    const [customer, setCustomer] = useState({
        name: "John",
        address: {
            city: "San Francisco",
            zipCode: 94111,
        },
    });

    const handleClickCustomer = () => {
        setCustomer({
            ...customer,
            address: { ...customer.address, zipCode: 94222 },
        });
    };

    /** UPDATING ARRAYS */
    const [tags, setTags] = useState(["happy", "cheerful"]);

    const handleClickTags = () => {
        // Add
        setTags([...tags, "exciting"]);

        // Remove
        setTags(tags.filter((tag) => tag !== "cheerful"));

        // Update
        setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
    };

    /** UPDATING ARRAY OF OBJECTS */
    const [bugs, setBugs] = useState([
        { id: 1, title: "Bug 1", fixed: false },
        { id: 2, title: "Bug 2", fixed: false },
    ]);

    const handleClickBugs = () => {
        // Initial lesson
        // setBugs(
        //     bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug))
        // );

        setBugs(
            produce((draft) => {
                const bug = draft.find((bug) => bug.id === 1);
                if (bug) bug.fixed = true;
            })
        );
    };

    return (
        <div className="m-5">
            <p className="text-2xl font-bold text-blue-400">{fullName}</p>

            <div className="m-5">
                <Message />
                <Message />
                <Message />
            </div>

            <div className="flex justify-center gap-2 m-5 items-center">
                <span>{drink.title} :</span>
                <span>{drink.price}</span>
                <button
                    className="p-2 rounded border border-yellow-600 bg-yellow-200"
                    onClick={handleClickDrink}
                >
                    Click Me!
                </button>
            </div>

            <div className="flex justify-center gap-2 m-5 items-center">
                {customer.name}, {customer.address.city}{" "}
                {customer.address.zipCode}
                <button
                    className="p-2 rounded border border-red-500 bg-red-200"
                    onClick={handleClickCustomer}
                >
                    Click Me!
                </button>
            </div>

            <div className="flex flex-col justify-center gap-2 m-5 items-center">
                <button
                    className="p-2 rounded border border-green-500 bg-green-200"
                    onClick={handleClickTags}
                >
                    Display my Mood!
                </button>

                {tags.map((tag) => {
                    return <span>{tag}</span>;
                })}
            </div>

            <div className="flex flex-col justify-center gap-2 m-5 items-center">
                <button
                    className="p-2 rounded border border-purple-500 bg-purple-200"
                    onClick={handleClickBugs}
                >
                    Toggle Bug Status!
                </button>

                {bugs.map((bug) => (
                    <span key={bug.id}>
                        {bug.title} - {bug.fixed ? "Fixed" : "Not Fixed"}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default App2;
