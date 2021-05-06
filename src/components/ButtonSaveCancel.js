import { useContext } from "react";
import { Button } from "semantic-ui-react";
import { Context } from "../Context";

export default function ButtonSaveCancel() {
    const { description, value, setEntries, entries, isExpense } = useContext(Context)

    const addEntry = (description, value, isExpense) => {
        const res = entries.concat({
            id: entries.length + 1,
            description,
            value,
            isExpense
        })
        setEntries(res)
    }
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