import { Container } from "semantic-ui-react";
import EntryLine from "./EntryLine";

export default function EntryLines({ entries, setIsOpen }) {
    return (
        <Container>
            {entries.map((entry) => (
                <EntryLine
                    key={entry.id}
                    {...entry}
                    setIsOpen={setIsOpen}
                />
            ))}
        </Container>
    )
}