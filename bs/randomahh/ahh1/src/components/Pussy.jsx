import React from 'react'
import Lund from './Lund';
import { useContext } from 'react';
import MyContext from './context';
const Pussy = () => {
    const value =  useContext(MyContext);
    return (
        <>
            <span>{value.count}</span>
            <button onClick={() => value.setCount((count) => count + 1)} >Fuck me daddy</button>
        </>
    )
}

export default Pussy