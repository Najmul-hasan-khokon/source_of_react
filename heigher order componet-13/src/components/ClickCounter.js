import WithCounter from './hoc/WithCounter';

const ClickCounter = (props) => {
    const { count, increamentCount } = props;
    return (
        <div>
            <button type="button" onClick={increamentCount}>
                clicked {count} times
            </button>
        </div>
    );
};

export default WithCounter(ClickCounter);
