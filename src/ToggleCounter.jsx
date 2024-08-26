import { useState } from "react";
import './Toggler.css';

export default function ToggleCounter() {
    const [isHappy, setIsHappy] = useState(true);
    const [count, setCount] = useState(0);
    const toggleIsHappy = () => {
        setIsHappy(!isHappy);
    }
    const addCount = () => {
        setCount(count + 2);
    }
    return (
        <button className="Toggler" onClick={() => {
            toggleIsHappy();
            addCount();
        }}>
            {isHappy ? '🙃' : '😞'} {count}
        </button>
    )
}