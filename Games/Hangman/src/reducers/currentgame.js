import {MAKE_GUESS} from '../actions/makeguess'

const initialState = {
  word: "pineapple",
  guesses: [],
  guessCount: "_ _ _ _ _ _ _ _ _",
  wrongCount: 0,
  hasWon: "",
}

function guessDash(word, guesses) {
  var letters = word.split("")
  var dash = "_";
  var result = letters.map(function(letter) {
    if(guesses.indexOf(letter) === -1) {
      return dash
    }
    else {
      return letter
    }
  })
  var joined = result.join(" ")
  return joined
}

function wrongCount(word, guesses) {
  var wrongAmount = 0
  let i=0
    for(i=0; i < guesses.length; i++) {
      if(word.indexOf(guesses[i]) === -1) {
        wrongAmount += 1
      }
    }
    return wrongAmount
}

function hasWon(word, guesses) {
  var letters = word.split("");
  var filteredWord = letters.filter(function(letter) {
    return (guesses.indexOf(letter) === -1)
  })
  if (filteredWord.length === 0)
    return "😅 Congratulations, you have won!";
}

export default (state = initialState, { type, payload } = {}) => {
  switch(type) {
    case MAKE_GUESS:
      state.guesses.push(payload)
      return {
        word: state.word,
        guesses: state.guesses,
        wrongCount: wrongCount(state.word, state.guesses),
        hasWon: hasWon(state.word, state.guessCount),
        guessCount: guessDash(state.word, state.guesses)
      }
    default:
      return state
  }
}
