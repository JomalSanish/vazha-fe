const Card = (props) => {
    return(
        <div className = "card">
            <p>{props.taskName}</p>
            <button className="button" onClick={() =>props.completeTaskHandler(props.id)}>Complete</button>
        </div>
    );
}

export {Card}