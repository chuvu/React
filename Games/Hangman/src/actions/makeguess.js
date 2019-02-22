export const MAKE_GUESS = 'MAKE_GUESS'

export default (letter) => {
  return {
    type: MAKE_GUESS,
    payload: letter
  }
}
