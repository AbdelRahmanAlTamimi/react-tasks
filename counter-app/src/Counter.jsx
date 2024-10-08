import {useState} from 'react'
function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        // setCount(count + 1);
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1 );
    }
    const reset = () => {
        setCount(0);
    }

    return (
        <div className='counter-container'>
            <p className='cont-display'>{ count }</p>
            <button className='conter-button' onClick={decrement}>-</button>
            <button className='conter-button' onClick={reset}>Reset</button>
            <button className='conter-button' onClick={increment}>+</button>
        </div>
    )
}

export default Counter