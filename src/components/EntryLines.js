import { Container } from "semantic-ui-react";
import EntryLine from "./EntryLine";

export default function EntryLines({ entries, setIsOpen, editEntry }) {
    return (
        <Container>
            {entries.map((entry, index) => (
                <EntryLine
                    key={index}
                    {...entry}
                    setIsOpen={setIsOpen}
                    editEntry={editEntry}
                />
            ))}
        </Container>
    )
}