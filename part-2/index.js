const App = () => (
    <div>
        <Tweet 
            username="@POTUS"
            name="Joe Biden" 
            date="3/25/21" 
            msg="Equal pay for equal work is common sense — and it’s long overdue. As president, I’m committed to closing the gap once and for all."
        />
        <Tweet 
            username="@AndrewYang"
            name="Andrew Yang"
            date="3/17/21"
            msg="Racism is dehumanizing."
        />
        <Tweet 
            username="@elonmusk"
            name="Elon Musk"
            date="3/24/21"
            msg="You can now buy a Tesla with Bitcoin"
        />
    </div>
)


ReactDOM.render(<App />, document.getElementById('root'))