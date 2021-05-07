import { Form, Segment, Checkbox } from 'semantic-ui-react'

export default function EntryForm({
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense }) {

    return (
        <>
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
        </>
    )
}