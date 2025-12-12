import { useEffect, useState } from "react";
import type { User } from "../services/user-service";
import userService from "../services/user-service";
import { CanceledError } from "../services/api-client";

const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    // async and await
    // useEffect(() => {
    //     const fetchUsers = async () => {
    //         try {
    //             const res = await apiClient.get<User[]>(
    //                 "/users"
    //             );
    //             setUsers(res.data);
    //         } catch (err) {
    //             setError((err as AxiosError).message);
    //         }
    //     };
    //     fetchUsers();
    // }, []);

    useEffect(() => {
        setLoading(true);
        const { request, cancel } = userService.getAll<User>();
        request
            .then((res) => {
                setUsers(res.data);
                setLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });
        // .finally(() => {
        //     setLoading(false);
        // }); // Does not work on StrictMode

        return () => cancel();
    }, []);

    return { users, error, isLoading, setUsers, setError };
};

export default useUsers;
