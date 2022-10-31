// Write your code here

import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          Then Button has been Clicked{' '}
          <span className="click-element">{count} </span>
          times
        </h1>
        <p>Click the Button to increase the count</p>
        <button onClick={this.onIncrement} className="button">
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
