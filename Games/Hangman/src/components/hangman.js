import React, { PureComponent } from 'react'
import GuessCount from './GuessCount'

class Hangman extends PureComponent {
  render() {
    return(
      <div>
      <GuessCount />
      </div>
    )
  }
}

export default Hangman
