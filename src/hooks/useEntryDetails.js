import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addEntryRedux, editEntryRedux } from "../redux/actions/entries.actions";
import { v4 as uuidv4 } from 'uuid';
import { closeModal } from "../redux/actions/modals.actions";

export default function useEntryDetails(desc = "", val = "", isExp = true) {
    const [description, setDescription] = useState(desc);
    const [value, setValue] = useState(val);
    const [isExpense, setIsExpense] = useState(isExp);
    const dispatch = useDispatch();

    // run this effect when we change (edit), updating state that are sent via this custom hook
    useEffect(() => {
        setDescription(desc);
        setValue(val);
        setIsExpense(isExp);
    }, [desc, val, isExp])

    function resetValues() {
        setDescription('');
        setValue('');
        setIsExpense(true);
    }

    function addEntry() {
        dispatch(addEntryRedux({
            id: uuidv4(),
            description,
            value,
            isExpense
        }));
        resetValues();
    }

    function editEntry(id) {
        dispatch(editEntryRedux(
            id,
            {
                id,
                description,
                value,
                isExpense
            }
        ))
        dispatch(closeModal());
        resetValues();
    }

    return {
        description,
        setDescription,
        value,
        setValue,
        isExpense,
        setIsExpense,
        addEntry,
        editEntry
    };
}