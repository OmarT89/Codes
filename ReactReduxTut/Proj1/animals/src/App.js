import './App.css';

import { useState } from 'react';
import AnimalShow from './AnimalShow';

function getRandAnimal() {
    const animals = ['bird', 'cat', 'caw', 'dog', 'gator', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
    const [animals, setAnimals] = useState([]);


    const handleClick = () => {
        setAnimals([...animals, getRandAnimal()]);
    };

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />;
    });

    return (
        <div className="app">
            <button onClick={handleClick}>Add Animal</button>
            <div className="animal-list">{ renderedAnimals }</div>
        </div>
    );
};

export default App;

{/* 
Some helping websites: 
reactjs.org/docs/events.html for more event handlers
https://react.dev/reference/react-dom/components/common
*/}