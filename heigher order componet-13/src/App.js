import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

function App() {
    return (
        <div className="App">
            <ClickCounter />
            <HoverCounter />
        </div>
    );
}

export default App;

// single line composition

// return (
//     <Emoji>
//         {({ addEmoji }) => <Text addEmoji={addEmoji} />}
//     </Emoji>
// )
