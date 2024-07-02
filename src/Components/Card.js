const Card = (props) => {
    return(
        <div className = "card">
            <p>{props.taskName}</p>
            <button className="button" onClick={() =>props.completeTaskHandler(props.id)}>Book</button>
        </div>
    );
}

export {Card}