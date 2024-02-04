import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}

  eatBanana = () => {
    this.setState(prevState => ({mangoes: prevState.mangoes + 1}))
  }

  eatMango = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  render() {
    const {mangoes, bananas} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate {mangoes} mangoes {bananas} bananas
          </h1>
          <div className="fruits-container">
            <div className="card">
              <img
                alt="mango"
                className="fruit"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              />
              <button
                onClick={this.eatBanana}
                type="button"
                className="fruit-btn"
              >
                Eat Mango
              </button>
            </div>
            <div className="card">
              <img
                alt="banana"
                className="fruit"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              />
              <button
                onClick={this.eatMango}
                type="button"
                className="fruit-btn"
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
