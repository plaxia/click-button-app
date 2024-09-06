import { useState } from 'react'
import './Counter.css'
import CounterButton from './CounterButton'

export default function Counter() {
    const [count, setCount] = useState(0)

    function increaseCounterParent(by) {
        setCount(count + by)

    }
    function decreaseCounterParent(by) {
        setCount(count - by)


    }

    function resetCounterParent() {
        setCount(0)
    }
    return (
        <>
            <span className="totalCount">{count}</span>
            <CounterButton by={1} incrementMethod={increaseCounterParent} decrementMetod={decreaseCounterParent}></CounterButton>
            <CounterButton by={2} incrementMethod={increaseCounterParent} decrementMetod={decreaseCounterParent}></CounterButton>
            <CounterButton by={5} incrementMethod={increaseCounterParent} decrementMetod={decreaseCounterParent}></CounterButton>
            <button className='resetButton' onClick={resetCounterParent}>Reset</button>
        </>
    )
}


