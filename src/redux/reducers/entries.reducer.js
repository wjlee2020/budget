import { initialEntries } from "../../seed/initialEntries";
import entriesTypes from '../actions/entries.actions'

export default function entriesReducer(state = initialEntries, action) {
    switch (action.type) {
        case entriesTypes.ADD_ENTRY: {
            const newEntries = state.concat({ ...action.payload })
            return newEntries;
        }
        case entriesTypes.REMOVE_ENTRY: {
            const newEntries = state.filter(entry => entry.id !== action.payload)
            return newEntries
        }
        case entriesTypes.POPULATE_ENTRY_DETAILS:
        case entriesTypes.EDIT_ENTRY: {
            const newEntries = [...state];
            const index = newEntries.findIndex(entry => entry.id === action.payload.id);
            newEntries[index] = { ...newEntries[index], ...action.payload.entry };
            return newEntries;
        }
        case entriesTypes.POPULATE_ENTRIES: {
            return action.payload
        }
        default:
            return state;
    }
}