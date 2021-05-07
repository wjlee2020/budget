import { useDispatch } from 'react-redux';
import { Button, Modal } from "semantic-ui-react";
import useEntryDetails from '../hooks/useEntryDetails';
import { closeModal } from '../redux/actions/modals.actions';
import EntryForm from "./EntryForm";

export default function ModalEdit({ isOpen, description, value, isExpense, }) {

    const dispatch = useDispatch();
    const entryUpdate = useEntryDetails(description, value, isExpense);

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
                    onClick={() => dispatch(closeModal())}
                >Save
                </Button>
            </Modal.Actions>
        </Modal>
    )
}