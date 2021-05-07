import { Form } from 'semantic-ui-react'
import ButtonSaveCancel from './ButtonSaveCancel'
import EntryForm from './EntryForm'
import useEntryDetails from '../hooks/useEntryDetails';

export default function NewEntryForm() {
    const {
        description,
        setDescription,
        value,
        setValue,
        isExpense,
        setIsExpense,
        addEntry } = useEntryDetails();

    return (
        <Form unstackable>
            <EntryForm
                description={description}
                setDescription={setDescription}
                value={value}
                setValue={setValue}
                isExpense={isExpense}
                setIsExpense={setIsExpense}
            />
            <ButtonSaveCancel addEntry={addEntry} />
        </Form>
    )
}