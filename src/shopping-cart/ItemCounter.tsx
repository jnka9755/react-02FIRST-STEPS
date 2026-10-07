import { useState } from "react"
// import './ItemCounter.css'
import styles from './ItemCounter.module.css'

interface Props {
    itemName: string
    quantity?: number
}

export const ItemCounter = ({ itemName, quantity }: Props) => {

    const [count, setCount] = useState(quantity ?? 0)

    const increment = () => {
        console.log(`Incrementando ${itemName} en 1`);
        setCount(count + 1)
    }

    const decrement = () => {
        if (count === 1) return;
        console.log(`Decrementando ${itemName} en 1`)
        setCount(count - 1)
    }

    return (

        <>
            <section className={styles['item-row']}>
                <span
                    className={styles.itemLabel}
                    style={{ color: count === 1 ? 'red' : 'black' }}>
                    {itemName}
                </span>
                <button onClick={increment}>+1</button>
                <span>{count}</span>
                <button onClick={decrement}>-1</button>
            </section>
        </>
    )
}
