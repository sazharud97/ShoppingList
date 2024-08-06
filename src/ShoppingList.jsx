import ShoppingListItem from "./ShoppingListItem";

function ShoppingList({ items }) {
    return (
        <ul>
            {items.map((i) => (
                <ShoppingListItem {...i}
                    // individual assignments replaced by spread (...) operator
                    // item={i.item}
                    // quantity={i.quantity}
                    // completed={i.completed}
                />
            ))}
        </ul>
    );
}

export default ShoppingList;