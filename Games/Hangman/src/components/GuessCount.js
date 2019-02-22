import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Guess from '../components/guess'
import { connect } from 'react-redux'
import One from '../images/1.png'
import Two from '../images/2.png'
import Three from '../images/3.png'
import Four from '../images/4.png'
import Five from '../images/5.png'
import Beginning from '../images/esimene.png'
import Six from '../images/6.png'

class GuessCount extends PureComponent {
  static propTypes = {
    guessCount: PropTypes.string,
    wrongCount: PropTypes.number,
    hasWon: PropTypes.string,
    guesses: PropTypes.array,
  }

  render() {
    if(this.props.wrongCount === 5) {
      var five = <img src= {Five} alt="five"/>
    }
    if(this.props.wrongCount === 4) {
      var four = <img src= {Four} alt="four"/>
    }
    if(this.props.wrongCount === 3) {
      var three = <img src= {Three} alt="three"/>
    }
    if(this.props.wrongCount === 2) {
      var two = <img src= {Two} alt="two"/>
    }
    if(this.props.wrongCount === 1) {
      var one = <img src= {One} alt="one"/>
    }
    if(this.props.wrongCount === 0) {
      var beginning = <img src= {Beginning} alt="zero"/>
    }
    if(this.props.wrongCount > 5) {
      var six = <img src= {Six} alt="dead"/>
    }

    if (this.props.wrongCount > 5)
      return(
        <div className="loser"><br />
          <h1>😱 YOU LOST!</h1>
          <h4> Come on, the answer was way too obvious...</h4><br />
          {six}
        </div>
      )
    else
    return(
      <div>
        <h2>⭐ Secret word:  {this.props.guessCount} ⭐</h2>
        <Guess />
        <h3>Wrong guesses: {this.props.wrongCount}</h3>
        <h3>Guess history: {this.props.guesses}</h3>
        <h2 className="winner"> {this.props.hasWon}</h2>
          {beginning} {one} {two} {three} {four} {five} {six}
      </div>
    )
  }
}

const mapStateToProps = ({ currentgame }) => ({
  wrongCount: currentgame.wrongCount,
  guessCount: currentgame.guessCount,
  hasWon: currentgame.hasWon,
  guesses: currentgame.guesses
})

export default connect(mapStateToProps)(GuessCount)
