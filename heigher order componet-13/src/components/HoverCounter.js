/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import WithCounter from './hoc/WithCounter';

const HoverCounter = (props) => {
    const { count, increamentCount } = props;
    return (
        <div>
            <h1 onMouseOver={increamentCount}>hovered {count} times</h1>
        </div>
    );
};

export default WithCounter(HoverCounter);
