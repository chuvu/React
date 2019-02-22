import Routes from '../config/routes'

const defaultState = Routes.router.getStateForAction(Routes.router.getActionForPathAndParams('MainMenu'))

export default (state = defaultState, action) =>
  Routes.router.getStateForAction(action, state) || state
