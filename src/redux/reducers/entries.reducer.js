import { initialEntries } from "../../seed/initialEntries";

export default function entriesReducer(state = initialEntries, action) {
    switch (action.type) {
        case "ADD_ENTRY": {
            const newEntries = state.concat({ ...action.payload })
            return newEntries;
        }
        case "REMOVE_ENTRY": {
            const newEntries = state.filter(entry => entry.id !== action.payload)
            return newEntries
        }
        default:
            return state;
    }
}