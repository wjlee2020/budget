import { useContext, useEffect } from 'react';
import { Segment, Grid, Icon, StepDescription } from 'semantic-ui-react'
import { Context } from '../Context';
import ModalEdit from './ModalEdit';

export default function EntryLine({ entry: { id, description, value, isExpense } }) {
    const {
        entries,
        setEntries,
        isOpen,
        setIsOpen,
        setDescription,
        setValue,
        setIsExpense,
        entryId,
        setEntryId
    } = useContext(Context);

    useEffect(() => {
        if (!isOpen && entryId) {
            const index = entries.findIndex(entry => entry.id === entry.id)
            const newEntries = [...entries]
            newEntries[index].description = description
            newEntries[index].value = value
            newEntries[index].isExpense = isExpense
            setEntries(newEntries)
        }
    }, [isOpen])

    const deleteEntry = (id) => {
        const res = entries.filter(entry => entry.id !== id);
        setEntries(res);
    }

    const editEntry = id => {
        console.log(id)
        if (id) {
            const index = entries.findIndex(entry => entry.id === id)
            const entry = entries[index]
            setEntryId(id)
            setDescription(entry.description)
            setValue(entry.value)
            setIsExpense(entry.isExpense)
            setIsOpen(prev => !prev)
        }
    }

    return (
        <>
            <Segment color={isExpense ? "red" : "green"}>
                <Grid columns={3} textAlign="right">
                    <Grid.Row>
                        <Grid.Column textAlign="left" width={10}>
                            {description}
                        </Grid.Column>
                        <Grid.Column textAlign="right" width={3}>
                            {value}
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Icon
                                name="edit"
                                style={{ cursor: 'pointer' }}
                                bordered
                                onClick={() => editEntry(id)}
                            />
                            <Icon
                                name="trash"
                                style={{ cursor: 'pointer' }}
                                bordered onClick={() => deleteEntry(id)}
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <ModalEdit isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    )
}