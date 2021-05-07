import { Button } from "semantic-ui-react";

export default function ButtonSaveCancel({ addEntry }) {

    return (
        <Button.Group style={{ margin: 20 }}>
            <Button>Cancel</Button>
            <Button.Or />
            <Button
                primary
                onClick={() => addEntry()}
            >Ok
            </Button>
        </Button.Group>
    )
}