import { Segment, Grid, Icon } from 'semantic-ui-react'

export default function EntryLine({ id, description, value, isExpense, deleteEntry, setIsOpen, editEntry }) {

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
                                bordered
                                onClick={() => deleteEntry(id)}
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </>
    )
}