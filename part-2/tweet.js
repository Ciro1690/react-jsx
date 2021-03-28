const Tweet = (props) => ( 
    <div>
        <h3>{props.name} {props.username}</h3>
        <h4>{props.date} - {props.msg}</h4> 
    </div>
)