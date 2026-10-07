import type { CSSProperties } from "react";

const firstName = 'Juan';
const lastName = 'Santana';

const favoriteGames = ['Diablo', 'Company of Heroes', 'Heroes of the Storm', 'Starcraft', 'Warcraft III', 'World of Warcraft'];
const isActive = true;

const address = {
    street: 'Av. Siempre Viva',
    number: 742,
    city: 'Springfield',
    country: 'USA'
};


const myStyle: CSSProperties = {
    color: 'blue',
    fontSize: '20px',
    fontWeight: 'bold'
};


export function MyAwesomeApp() {



    return (
        <>
            <h1 style={myStyle}>{firstName}</h1>
            <h3>{lastName}</h3>
            <ul>
                {favoriteGames.map(game => (
                    <li key={game}>{game}</li>
                ))}
            </ul>
            <h2>{isActive ? 'Activo' : 'Inactivo'}</h2>
            <address>
                <p>{address.street}, {address.number}</p>
                <p>{address.city}, {address.country}</p>
            </address>
        </>
    )
};
