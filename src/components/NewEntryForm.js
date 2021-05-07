import { Form } from 'semantic-ui-react'
import ButtonSaveCancel from './ButtonSaveCancel'
import EntryForm from './EntryForm'

export default function NewEntryForm({
    addEntry,
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense }) {

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