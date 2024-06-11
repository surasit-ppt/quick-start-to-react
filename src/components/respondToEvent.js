export default function RespondToEvent() {
    function handleClick() {
        alert('You clicked me!')
    }

    return (
        <div className="box">
            <h2>Respond To Event</h2>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}