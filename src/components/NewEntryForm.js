import { Form } from 'semantic-ui-react'
import ButtonSaveCancel from './ButtonSaveCancel'

export default function NewEntryForm() {
    return (
        <Form unstackable>
            <Form.Group>
                <Form.Input
                    placeholder="New shoes"
                    icon="tags"
                    width={12}
                    label="Transaction Description"
                />
                <Form.Input
                    placeholder="100"
                    icon="dollar"
                    width={4}
                    label="cost"
                    iconPosition="left"
                />
            </Form.Group>
            <ButtonSaveCancel />
        </Form>
    )
}