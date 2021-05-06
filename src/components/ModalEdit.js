import { useEffect, useContext } from 'react'
import { Context } from '../Context'
import { Button, Modal } from "semantic-ui-react";
import EntryForm from "./EntryForm";

export default function ModalEdit({ isOpen, setIsOpen }) {
    const {
        entries,
        setEntries,
        description,
        setDescription,
        value,
        setValue,
        isExpense,
        setIsExpense,
        entryId,
        setEntryId
    } = useContext(Context);

    useEffect(() => {
        if (!isOpen && entryId) {
            const index = entries.findIndex(entry => entry.id === entry.id)
            const newEntries = [...entries]
            newEntries[index].description = description
            newEntries[index].value = value
            newEntries[index].isExpense = isExpense
            setEntries(newEntries)
        }
    }, [isOpen])

    return (
        <Modal open={isOpen}>
            <Modal.Header>Edit Entry</Modal.Header>
            <Modal.Content>
                <EntryForm />
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => setIsOpen(prev => !prev)}>Close</Button>
                <Button
                    primary
                    onClick={() => setIsOpen(prev => !prev)}
                >Save
                </Button>
            </Modal.Actions>
        </Modal>
    )
}