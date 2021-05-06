import { Button } from "semantic-ui-react";

export default function ButtonSaveCancel() {
    return (
        <Button.Group style={{ marginTop: 20 }}>
            <Button>Cancel</Button>
            <Button.Or />
            <Button primary>Ok</Button>
        </Button.Group>
    )
}