const App = () => (
    <div>
        <Person name="Ciro" age={30} hobbies={["running", "hiking", "reading"]}/>
        <Person name="Shorty" age={55} hobbies={["tv", "bird watching", "drums"]}/>
        <Person name="Longnamedperson" age={15} hobbies={["poetry", "longboarding"]}/>
    </div>
)


ReactDOM.render(<App />, document.getElementById('root'))