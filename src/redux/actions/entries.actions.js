const types = {
    ADD_ENTRY: "ADD_ENTRY",
    REMOVE_ENTRY: "REMOVE_ENTRY",
    EDIT_ENTRY: "EDIT_ENTRY"
}

export default types;

export function addEntryRedux(payload) {
    return {
        type: types.ADD_ENTRY,
        payload
    }
}

export function removeEntryRedux(id) {
    return {
        type: types.REMOVE_ENTRY,
        payload: id
    }
}

export function editEntryRedux(id, entry) {
    return {
        type: types.EDIT_ENTRY,
        payload: { id, entry }
    }
}