import { useState } from "react"

// export default function UseState() {
// const [count, setCount] = useState(10);

// function handleClick() {
//     setCount(count + 10);
// }

// return (
//     <div className="box">
//         <h2>Use State</h2>
//         <p>{count}</p>
//         <button onClick={handleClick}>Click</button>
//     </div>
// )

// Share Data between components [ File : App.js ]
export default function UseState({ count, onClick }) {
    return (
        <div className="box">
            <h2>Use State</h2>
            <p>{count}</p>
            <button onClick={onClick}>Click</button>
        </div>
    )


}