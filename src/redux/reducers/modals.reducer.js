import types from '../actions/modals.actions';

const modalReducer = (state = { isOpen: false }, action) => {
    switch (action.type) {
        case types.OPEN_EDIT_MODAL: {
            return { ...state, isOpen: true, id: action.payload.id }
        }
        case types.CLOSE_EDIT_MODAL: {
            return { ...state, isOpen: false, id: null }
        }
        default:
            return state
    }
}

export default modalReducer;