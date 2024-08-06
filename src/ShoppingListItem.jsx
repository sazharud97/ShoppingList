function ShoppingListItem({ item, quantity, completed }) {
    return (
        <li>
            {item} - {quantity}
        </li>
    );
}

export default ShoppingListItem;