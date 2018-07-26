import React from "react";

class Counter extends React.Component {
    constructor() {
        super()
        this.state = { count: 0 }
      }
    render() {
        return (
        <div>
            <h1>Counter</h1>
            <p>current count: {this.state.count}</p>
            <button
                onClick={() =>
                    this.setState(prevState => ({
                        count: prevState.count + 1,
                    }))
                }
            >plus</button>

            <button
                onClick={() =>
                this.setState(prevState => ({
                    count: prevState.count - 1,
                }))
            }

            >minus</button>
            <br/>
            <Link to="/">Go back to the homepage</Link>
        </div>
        )
  }
}

export default Counter;