export function toCelcias(Farenheit) {
    return ((Farenheit - 32) * 5) / 9;
}
export function toFarenheit(celcias) {
    return (celcias * 9) / 5 + 32;
}
export function Convert(temperature, convertTo) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }

    const output = convertTo(input);
    const rounded = Math.round(output * 1000) / 1000; //
    return rounded.toString();
}
