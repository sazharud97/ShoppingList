function handleClick() {
    console.log('clicked you hehe');
}

function handleHover() {
    console.log('hovered');
}

export default function Clicker() {
    return (
        <div>
            <p>Click the button</p>
            <button onMouseOver={handleHover} onClick={handleClick}>Click</button>
        </div>
    )
}