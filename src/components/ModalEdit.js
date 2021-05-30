import { useDispatch } from 'react-redux';
import { Button, Modal } from "semantic-ui-react";
import useEntryDetails from '../hooks/useEntryDetails';
import { closeModal } from '../redux/actions/modals.actions';
import EntryForm from "./EntryForm";

export default function ModalEdit({ isOpen, description, value, isExpense, id }) {

    const dispatch = useDispatch();
    const entryUpdate = useEntryDetails(description, value, isExpense);
    // useEntryDetails is our custom hook. it gives us each returned value from the custom hook component
    // we bring in description, value, isExpense to send it via props to EntryForm to hold the input values
    console.log(entryUpdate);

    return (
        <Modal open={isOpen}>
            <Modal.Header>Edit Entry</Modal.Header>
            <Modal.Content>
                <EntryForm
                    description={entryUpdate.description}
                    setDescription={entryUpdate.setDescription}
                    value={entryUpdate.value}
                    setValue={entryUpdate.setValue}
                    isExpense={entryUpdate.isExpense}
                    setIsExpense={entryUpdate.setIsExpense} />
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => dispatch(closeModal())}>Close</Button>
                <Button
                    primary
                    onClick={() => entryUpdate.editEntry(id)}
                >Save
                </Button>
            </Modal.Actions>
        </Modal>
    )
}