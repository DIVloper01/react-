import React from 'react'
import { increment, decrement, reset } from './CounterSlice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
const Counter = () => {
    const value = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <>
            <div>
                <h2>{value}</h2>
                <button onClick={() => dispatch(decrement())}>-</button>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(reset())}>reset</button>
            </div>
        </>
    )
}

export default Counter