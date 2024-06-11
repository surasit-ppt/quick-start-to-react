import Login from "./login";
import Admin from "./admin";

// let content;
// let isLoggedIn = false;

// if (isLoggedIn) {
//     content = <Admin />
// } else {
//     content = <Login />
// }

// function ConditionalRendering() {
//     return (
//         <div>
//             {content}
//         </div>
//     )
// }

let isLoggedIn = false;

function ConditionalRendering() {
    return (
        <div className="box">
            {isLoggedIn ? <Admin /> : <Login />}
        </div>
    )
}

export default ConditionalRendering;