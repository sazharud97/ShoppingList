function ShoppingListItem({ item, quantity, completed }) {
    const styles = {
        color: completed ? 'lightslategrey' : 'paleturquoise',
        textDecoration: completed ? 'line-through' : 'none'
    }
    return (
        <li style={styles}>
            {item} - {quantity}
        </li>
    );
}

export default ShoppingListItem;