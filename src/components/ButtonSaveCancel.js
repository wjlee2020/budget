import { Button } from "semantic-ui-react";

export default function ButtonSaveCancel({ addEntry, description, value, isExpense }) {

    return (
        <Button.Group style={{ margin: 20 }}>
            <Button>Cancel</Button>
            <Button.Or />
            <Button
                primary
                onClick={() => addEntry(description, value, isExpense)}
            >Ok
            </Button>
        </Button.Group>
    )
}