function handleFormSubmit(evt) {
    evt.preventDefault();
    console.log('submitted form')
}

export default function Form() {
    return (
        <form onSubmit={handleFormSubmit}>
            <button>Submit</button>
        </form>
    );
}