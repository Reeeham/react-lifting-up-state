import React, { useState } from "react"


const Counter = (props) => { 

    return(<div>
        <h3>count: {props.count} </h3>
        <button onClick={props.increment}>increment</button>
        <button onClick={props.decrement}>decrement</button>
    </div>)
}

const CounterExample = () => { 
    const [count,setCount] = useState(0);

   const  increment = () => { 
        setCount(count + 1);
    }
    const  decrement = () => { 
        setCount(count - 1);
    }
    return(<div>
        <Counter count={count} increment={increment} decrement={decrement}/>
        <Counter count={count} increment={increment} decrement={decrement}/>
    </div>);
}


export default CounterExample;