module.exports = (state, { type, payload }) => {
  const { route, services, currentService } = state
  switch (type) {
    case 'CHANGE_ROUTE':
      return { ...state, lastRoute: route, route: payload }
    case 'CHANGE_SERVICE':
      return { ...state, currentService: payload, route: '/service' }
    default:
      return { ...state }
  }
}
