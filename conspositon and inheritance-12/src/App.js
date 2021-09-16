import Bracket from './components/composition/Bracket';
import Emoji from './components/composition/Emoji';
import Text from './components/composition/text';

function App() {
    return (
        // nested composition
        <>
            <Emoji>
                {({ addEmoji }) => (
                    <Bracket>
                        {(addBracket) => <Text addEmoji={addEmoji} addBracket={addBracket} />}
                    </Bracket>
                )}
            </Emoji>
        </>
    );
}

export default App;

// single line composition

// return (
//     <Emoji>
//         {({ addEmoji }) => <Text addEmoji={addEmoji} />}
//     </Emoji>
// )
