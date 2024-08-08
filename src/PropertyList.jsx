import Property from './Property.jsx';
import './PropertyList.css'

function PropertyList({ properties }) {
    return (
        <div className="PropertyList">
            {properties.map((i) => {
                return <Property {...i} key={i.id} />
            })}
        </div>
    );
}

export default PropertyList;