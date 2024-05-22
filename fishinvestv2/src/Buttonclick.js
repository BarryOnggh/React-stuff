import React from "react";
import { useState } from "react";

const Buttonclick = () =>{
    const[count,setCount] = useState(0);

    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-10">
            <p>Show your love for rare fish!</p>
            <button onClick={() => setCount(count + 1)}>
                click to like rare fish
            </button>
            <p>You liked rare fish {count} times</p>
        </div>
    );
};

export default Buttonclick;