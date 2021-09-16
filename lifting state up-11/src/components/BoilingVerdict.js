export default function BoilingVerdict({ celcias }) {
    if (celcias >= 100) {
        return <p>the water would boil!</p>;
    }
    return <p>the water would not boil!</p>;
}
