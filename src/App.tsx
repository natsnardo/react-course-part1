import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";
import "./App.css";

function App() {
    let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

    const handleSelectItem = (item: string) => {
        console.log(item);
    };

    const [alertVisible, setAlertVisiblity] = useState(false);

    return (
        <>
            <div>
                <ListGroup
                    items={items}
                    heading="Cities"
                    onSelectItem={handleSelectItem}
                />
            </div>

            <div>
                {alertVisible && (
                    <Alert onClose={() => setAlertVisiblity(false)}>
                        Hello <b>Nats</b>
                    </Alert>
                )}

                <Button color="primary" onClick={() => setAlertVisiblity(true)}>
                    Sign Up
                </Button>
            </div>

            <Like onClick={() => console.log("Clicked!")} />
        </>
    );
}

export default App;
