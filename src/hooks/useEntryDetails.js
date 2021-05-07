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
    useEffect(() => {
        setDescription(desc);
        setValue(val);
        setIsExpense(isExp);
    }, [desc, val, isExp])

    function addEntry() {
        dispatch(addEntryRedux({
            id: uuidv4(),
            description,
            value,
            isExpense
        }));
        setDescription('');
        setValue('');
        setIsExpense(true);
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