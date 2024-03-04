import sortCharacters from './sortCharacters';

test('should sort', () => {
    expect(() => {
        sortCharacters(
            [
                {name: 'мечник', health: 10},
                {name: 'маг', health: 100},
                {name: 'лучник', health: 80},
            ]
        );
    }).toBe(
        [
            {name: 'маг', health: 100},
            {name: 'лучник', health: 80},
            {name: 'мечник', health: 10},
        ]
    );
});