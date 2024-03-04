import showHealth from './healthCheck';
import sortCharacters from './sortCharacters';

const characters = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
]

console.log(sortCharacters(characters))
console.log(showHealth(70))