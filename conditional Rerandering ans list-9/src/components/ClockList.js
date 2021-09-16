import Clock from './Clock';

function ClockList() {
    const arr = [1, 2];

    return (
        <div>
            {arr.map(() => (
                <Clock key={Math.random()} />
            ))}
        </div>
    );
}
export default ClockList;

// import Clock from './Clock';

// export default function ClockList({ quantities = [] }) {
//     return (
//         <div>
//             {quantities.map((key) => (
//                 <Clock key={key} />
//             ))}
//         </div>
//     );
// }
