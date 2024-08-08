import './PropertyList.css'

function Property({ id, name, rating, price }) {
    return (
        <div className="Property">
            <h4>{name}</h4>
            <h5>${price}/night</h5>
            <p>{rating}/5 ⭐</p>
        </div>
    );
}

export default Property;