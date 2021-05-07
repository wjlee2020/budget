export function addEntryRedux() {
    return {
        type: "ADD_ENTRY",
        payload: payload_add
    }
}

export function removeEntryRedux(id) {
    return {
        type: "REMOVE_ENTRY",
        payload: id
    }
}
