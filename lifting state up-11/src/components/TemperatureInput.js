import React from 'react';
// temperature input all the things are getting props akare
const scaleNames = {
    c: 'Celcias',
    f: 'Farenheit',
};
export default function TemperatureInput({ temperature, scale, onTemperatureChange }) {
    return (
        <fieldset>
            <legend>Enter temperature in {scaleNames[scale]}</legend>
            <input
                type="text"
                value={temperature}
                onChange={(e) => onTemperatureChange(e, scale)}
            />
        </fieldset>
    );
}
