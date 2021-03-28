const ageCheck = (age) => {
    if (age >= 18) {
        return 'Please go vote!'
    } else {
        return 'you must be 18'
    }
}

const nameCheck = (name) => {
    if (name.length > 8) {
        return name.slice(0, 6)
    }
    return name
}

const Person = (props) => {
    const {name, age, hobbies} = props
    return (
    <div>
        <p>“Learn some information about this person”</p>
        <h3>{nameCheck(name)}</h3>
        <h3>{ageCheck(age)}</h3>
        <ul>
            {hobbies.map(hobby => <li>{hobby}</li>)}
        </ul>
    </div>
    )
}