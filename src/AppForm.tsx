import "./index.css";
import Form from "./components/Form";
import ProductList from "./components/ProductList";
import { useState } from "react";
import userService, { type User } from "./services/user-service";
import useUsers from "./hooks/useUsers";

function App() {
    const [category, setCategory] = useState("");

    const { users, error, isLoading, setUsers, setError } = useUsers();

    const addUser = () => {
        const originalUsers = [...users];
        const tempId = Date.now() + Math.random();
        const newUser: User = { id: tempId, name: "New User" };
        setUsers((users) => [newUser, ...users]);

        userService
            .create(newUser)
            .then(({ data: savedUser }) =>
                setUsers((users) =>
                    users.map((user) =>
                        user.id === tempId ? { ...savedUser, id: tempId } : user
                    )
                )
            )
            .catch((err) => {
                setError(err.message);
                setUsers(originalUsers);
            });
    };

    const updateUser = (user: User) => {
        const originalUsers = [...users];
        const updatedUser: User = { ...user, name: user.name + "!" };
        setUsers((users) =>
            users.map((existing) =>
                existing.id === user.id ? updatedUser : existing
            )
        );

        userService.update(updatedUser).catch((err) => {
            setError(err.message);
            setUsers(originalUsers);
        });
    };

    const deleteUser = (user: User) => {
        const originalUsers = [...users];
        setUsers(users.filter((u) => u.id !== user.id));

        userService.delete(user.id).catch((err) => {
            setError(err.message);
            setUsers(originalUsers);
        });
    };

    return (
        <div className="flex flex-col gap-y-5">
            <Form />

            <ProductList category={category} />
            <select
                className="form-select"
                onChange={(event) => setCategory(event.target.value)}
            >
                <option value=""></option>
                <option value="Clothing">Clothing</option>
                <option value="Household">Household</option>
            </select>

            <button className="btn btn-primary w-fit" onClick={addUser}>
                Add User
            </button>

            {error && <h1 className="text-danger">{error}</h1>}
            {isLoading && <div className="spinner-border"></div>}
            <ul className="list-group">
                {users?.map((user) => (
                    <li
                        className="list-group-item d-flex items-center justify-content-between"
                        key={user.id}
                    >
                        {user.name}{" "}
                        <div className="flex gap-x-3">
                            <button
                                className="btn btn-secondary"
                                onClick={() => updateUser(user)}
                            >
                                Update
                            </button>
                            <button
                                className="btn btn-outline-danger"
                                onClick={() => deleteUser(user)}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
