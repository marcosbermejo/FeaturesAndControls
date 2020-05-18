
const initialState = {
    name: '',
    features: [],
    connection: {
        connected: false,
        error: '',
    }
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'REDUX_WEBSOCKET::MESSAGE':
            return {...state, ...JSON.parse(action.payload.message)}
        case 'REDUX_WEBSOCKET::ERROR':
            return {...state, connection: { connected: false, error: 'Error connecting server'}}
        case 'REDUX_WEBSOCKET::OPEN':
            return {...state, connection: { connected: true, error: '' }}  
        case 'REDUX_WEBSOCKET::DISCONNECT':
            return initialState
        default:
            return state
    }

}

export default reducer;