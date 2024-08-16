function handleClick() {
    console.log('clicked you hehe');
}

function handleHover() {
    console.log('hovered');
}

export default function Clicker({ message, buttonText }) {
    return (
        <div>
            <p>{message}</p>
            <button onMouseOver={handleHover} onClick={handleClick}>{buttonText}</button>
        </div>
    )
}