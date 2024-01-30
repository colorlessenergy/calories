'use client';

import { useState } from 'react';

export default function Home() {
    const [calories, setCalories] = useState(100);

    const handleKeyUp = event => {
        const calories = event.currentTarget.textContent.match(/\d+/g);

        if (!calories) return setCalories(0);

        setCalories(
            calories.reduce((accumulator, currentValue) => {
                return parseFloat(accumulator) + parseFloat(currentValue);
            })
        );
    };

    return (
        <>
            <h1>{calories} calories</h1>

            <div className="text" onKeyUp={handleKeyUp} contentEditable>
                100 oranges
            </div>
        </>
    );
}
