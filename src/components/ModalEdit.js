import { useDispatch } from 'react-redux';
import { Button, Modal } from "semantic-ui-react";
import { closeModal } from '../redux/actions/modals.actions';
import EntryForm from "./EntryForm";

export default function ModalEdit({
    isOpen,
    setIsOpen,
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense }) {

    const dispatch = useDispatch();

    return (
        <Modal open={isOpen}>
            <Modal.Header>Edit Entry</Modal.Header>
            <Modal.Content>
                <EntryForm
                    description={description}
                    setDescription={setDescription}
                    value={value}
                    setValue={setValue}
                    isExpense={isExpense}
                    setIsExpense={setIsExpense} />
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => dispatch(closeModal())}>Close</Button>
                <Button
                    primary
                    onClick={() => setIsOpen(false)}
                >Save
                </Button>
            </Modal.Actions>
        </Modal>
    )
}