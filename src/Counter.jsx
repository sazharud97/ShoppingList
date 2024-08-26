import { useState } from "react";

export default function Counter() {
    // useState param is defualt value for num
    const [num, setNum] = useState(5);
    console.log(`component executed, num is ${num}`);
    const changeNum = () => {
        setNum(num + 1);
        console.log(`setnum executed, num is ${num}`);
    }
    return (
        <div>
            <p>The count is: {num}</p>
            <button onClick={changeNum}>Click</button>
        </div>
    )
}