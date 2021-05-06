const types = {
    OPEN_EDIT_MODAL: 'OPEN_EDIT_MODAL',
    CLOSE_EDIT_MODAL: 'CLOSE_EDIT_MODAL'
};

export default types;

export const opentEditModal = id => {
    return {
        type: types.OPEN_EDIT_MODAL, payload: { id }
    }
};

export const closeEditModal = id => {
    return {
        type: types.CLOSE_EDIT_MODAL, payload: { id }
    }
};