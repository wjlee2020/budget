const types = {
    ADD_ENTRY: "ADD_ENTRY",
    REMOVE_ENTRY: "REMOVE_ENTRY",
    EDIT_ENTRY: "EDIT_ENTRY",
    GET_ENTRIES: "GET_ENTRIES",
    POPULATE_ENTRIES: "POPULATE_ENTRIES"
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

export function getAllEntriesRedux() {
    return {
        type: types.GET_ENTRIES
    }
}

export function populateEntries(entries) {
    return {
        type: types.POPULATE_ENTRIES,
        payload: entries
    }
}