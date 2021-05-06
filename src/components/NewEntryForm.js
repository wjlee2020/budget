import { Form } from 'semantic-ui-react'
import ButtonSaveCancel from './ButtonSaveCancel'
import EntryForm from './EntryForm'

export default function NewEntryForm() {

    return (
        <Form unstackable>
            <EntryForm />
            <ButtonSaveCancel />
        </Form>
    )
}