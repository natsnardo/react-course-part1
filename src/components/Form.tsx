// import { useRef, useState, type FormEvent } from "react";
import { useForm, type FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    name: z.string().min(3, { message: "Name must be atleast 3 characters." }),
    age: z
        .number({ error: "Age field is required" })
        .min(18, { message: "Age must be at least 18" }),
});

type FormData = z.infer<typeof schema>;

// /** React Hook Form */
// interface FormData {
//     name: string;
//     age: number;
// }

const Form = () => {
    /** useRef */
    // const nameRef = useRef<HTMLInputElement>(null);
    // const ageRef = useRef<HTMLInputElement>(null);
    // const person = { name: "", age: 0 };

    // const handleSubmit = (event: FormEvent) => {
    //     event.preventDefault();
    //     if (nameRef.current !== null) person.name = nameRef.current.value;
    //     if (ageRef.current !== null)
    //         person.age = parseInt(ageRef.current.value);
    //     console.log(person);
    // };

    /** useState */
    // const [person, setPerson] = useState({
    //     name: "",
    //     age: 0,
    // });

    // const handleSubmit = (event: FormEvent) => {
    //     event.preventDefault();
    //     console.log(person);
    // };

    // return (
    //     <form onSubmit={handleSubmit}>
    //         <div className="mb-3">
    //             <label htmlFor="name" className="form-label">
    //                 Name
    //             </label>
    //             <input
    //                 // ref={nameRef}
    //                 id="name"
    //                 type="text"
    //                 className="form-control"
    //                 value={person.name}
    //                 onChange={(event) =>
    //                     setPerson({ ...person, name: event.target.value })
    //                 }
    //             />
    //         </div>

    //         <div className="mb-3">
    //             <label htmlFor="age" className="form-label">
    //                 Age
    //             </label>
    //             <input
    //                 // ref={ageRef}
    //                 id="age"
    //                 type="number"
    //                 className="form-control"
    //                 value={person.age || ""}
    //                 onChange={(event) =>
    //                     setPerson({
    //                         ...person,
    //                         age: parseInt(event.target.value),
    //                     })
    //                 }
    //             />
    //         </div>

    //         <button className="btn btn-primary" type="submit">
    //             Submit
    //         </button>
    //     </form>
    // );

    /** React Hook Form */
    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    // } = useForm<FormData>();

    // const onSubmit = (data: FieldValues) => console.log(data);

    // return (
    //     <form onSubmit={handleSubmit(onSubmit)}>
    //         <div className="mb-3">
    //             <label htmlFor="name" className="form-label">
    //                 Name
    //             </label>
    //             <input
    //                 {...register("name", { required: true, minLength: 3 })}
    //                 id="name"
    //                 type="text"
    //                 className="form-control"
    //             />
    //             {errors.name?.type === "required" && (
    //                 <p className="mt-1 text-red-500">
    //                     The name field is required.
    //                 </p>
    //             )}
    //             {errors.name?.type === "minLength" && (
    //                 <p className="mt-1 text-red-500">
    //                     The name must be atleast 3 characters.
    //                 </p>
    //             )}
    //         </div>

    //         <div className="mb-3">
    //             <label htmlFor="age" className="form-label">
    //                 Age
    //             </label>
    //             <input
    //                 {...register("age")}
    //                 id="age"
    //                 type="number"
    //                 className="form-control"
    //             />
    //         </div>

    //         <button className="btn btn-primary" type="submit">
    //             Submit
    //         </button>
    //     </form>
    // );

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<FormData>({ resolver: zodResolver(schema) });

    const onSubmit = (data: FieldValues) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Name
                </label>
                <input
                    {...register("name")}
                    id="name"
                    type="text"
                    className="form-control"
                />
                {errors.name && (
                    <p className="mt-1 text-red-500">{errors.name.message}</p>
                )}
            </div>

            <div className="mb-3">
                <label htmlFor="age" className="form-label">
                    Age
                </label>
                <input
                    {...register("age", { valueAsNumber: true })}
                    id="age"
                    type="number"
                    className="form-control"
                />
                {errors.age && (
                    <p className="mt-1 text-red-500">{errors.age.message}</p>
                )}
            </div>

            <button
                disabled={!isValid}
                className="btn btn-primary"
                type="submit"
            >
                Submit
            </button>
        </form>
    );
};

export default Form;
