import { ItemCounter } from './shopping-cart/ItemCounter'

interface ItemInCart {
    productName: string
    quantity: number
};

const itemsInCart: ItemInCart[] = [
    { productName: 'PC Gamer', quantity: 5 },
    { productName: 'Tablet', quantity: 10 },
    { productName: 'Smartphone', quantity: 20 },
];

export const StoreApp = () => {
    return (
        <>
            <h1>Carrito de compras</h1>

            {itemsInCart.map(({ productName, quantity }) => (
                <ItemCounter
                    key={productName}
                    itemName={productName}
                    quantity={quantity}
                />
            ))}

        </>
    )
}
