const Counter = () => {
    const [count, setCount] = React.useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
        </div>
    );
};


ReactDOM.createRoot(document.getElementById('root')).render(<Counter/>);