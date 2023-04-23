
import { useState } from "react";


const CountButton = () => {

    const [count, setCount] = useState<number>(0);

    return (
        <button
            onClick={ () => {
                setCount( (prev) => prev + 1)
            }}
        >
            Count { count }
        </button>
    )
}


export default CountButton