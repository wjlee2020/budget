import { Container } from "semantic-ui-react";
import EntryLine from "./EntryLine";

export default function EntryLines({ entries, deleteEntry, setIsOpen, editEntry }) {
    return (
        <Container>
            {entries.map((entry) => (
                <EntryLine
                    key={entry.id}
                    {...entry}
                    deleteEntry={deleteEntry}
                    setIsOpen={setIsOpen}
                    editEntry={editEntry}
                />
            ))}
        </Container>
    )
}