const types = {
    OPEN_MODAL: "OPEN_MODAL",
    CLOSE_MODAL: "CLOSE_MODAL"
}

export default types;

export function openModal(id) {
    return {
        type: types.OPEN_MODAL,
        payload: { id }
    }
}

export function closeModal() {
    return {
        type: types.CLOSE_MODAL
    }
}