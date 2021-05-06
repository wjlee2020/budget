import { useContext } from 'react';
import { Segment, Grid, Icon } from 'semantic-ui-react'
import { Context } from '../Context';
import ModalEdit from './ModalEdit';

export default function EntryLine({ entry: { id, description, value, isExpense } }) {
    const { entries, setEntries, isOpen, setIsOpen } = useContext(Context);

    const deleteEntry = (id) => {
        const res = entries.filter(entry => entry.id !== id);
        setEntries(res);
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
                                onClick={() => setIsOpen(prev => !prev)}
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