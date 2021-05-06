import { useContext } from 'react'
import { Checkbox, Form, Segment } from 'semantic-ui-react'
import { Context } from '../Context'
import ButtonSaveCancel from './ButtonSaveCancel'

export default function NewEntryForm() {
    const { description, value, setDescription, setValue, isExpense, setIsExpense } = useContext(Context)

    return (
        <Form unstackable>
            <Form.Group>
                <Form.Input
                    placeholder="New shoes"
                    value={description}
                    onChange={({ target }) => setDescription(target.value)}
                    icon="tags"
                    width={12}
                    label="Transaction Description"
                />
                <Form.Input
                    placeholder="100"
                    value={value}
                    onChange={({ target }) => setValue(target.value)}
                    icon="dollar"
                    width={4}
                    label="cost"
                    iconPosition="left"
                />
            </Form.Group>

            <Segment compact>
                <Checkbox
                    toggle
                    label="Expense"
                    checked={isExpense}
                    onChange={() => setIsExpense(prev => !prev)}
                />
            </Segment>

            <ButtonSaveCancel />
        </Form>
    )
}