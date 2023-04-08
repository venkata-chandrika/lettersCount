// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    lettersCount: 0,
  }

  countOfLetters = event => {
    this.setState({
      lettersCount: event.target.value.length,
    })
  }

  render() {
    const {lettersCount} = this.state
    return (
      <div className="container">
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
        <div className="content-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <form onSubmit={this.handleSubmit}>
            <label className="para" htmlFor="phrase">
              Enter the phrase
            </label>
            <input
              type="text"
              className="input"
              id="phrase"
              onChange={this.countOfLetters}
              placeholder="Enter the phrase"
            />
          </form>

          <p className="button" type="button">
            No.of letters: {lettersCount}
          </p>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
