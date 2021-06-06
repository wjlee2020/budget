import modalTypes from '../actions/modals.actions'

export default function modalReducer(state = { isOpen: false }, action) {
    switch (action.type) {
        case modalTypes.OPEN_MODAL: {
            return { ...state, isOpen: true, id: action.payload.id }
        }
        case modalTypes.CLOSE_MODAL: {
            return { ...state, isOpen: false, id: null }
        }
        default:
            return state;
    }
}