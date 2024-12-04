import ShoppingListItem from "./ShoppingListItem"
function ShoppingList({items}){
    return (
        <ul>
            {items.map((i) => (
                // <ShoppingListItem 
                //     key={i.id}
                //     item={i.item}
                //     quantity= {i.quantity}
                //     completed= {i.completed}
                // />
                <ShoppingListItem key={i.id} {...i} />
            ))}               
        </ul>
        )
}

export default ShoppingList;
// const data = [
//     {item: 'egg', quantity: 12, completed: false},
//     {item: 'milk', quantity: 1, completed: true},
//     {item: 'chicken breasts', quantity: 4, completed: false},
//     {item: 'carrots', quantity: 12, completed: true}
//   ]