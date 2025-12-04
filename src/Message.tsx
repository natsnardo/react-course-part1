/** Initial Lesson */
// function Message() {
//     const name = 'Nats';
//     if (name)
//         return <h1 >Hello {name}</h1>;
//     return <h1>Hello World</h1>
// }

/** (2nd Lesson) 5.4 Keeping Components Pure */

// let count = 0; // Impure

const Message = () => {
    // console.log("Message called", count); // Strictmode - Impure

    let count = 0; //Pure
    count++;
    return <div>Message {count}</div>;
};

export default Message;
