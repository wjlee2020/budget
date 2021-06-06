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
        case entriesTypes.EDIT_ENTRY: {
            const newEntries = [...state];
            const index = newEntries.findIndex(entry => entry.id === action.payload.id);
            newEntries[index] = { ...action.payload.entry };
            return newEntries;
        }
        default:
            return state;
    }
}