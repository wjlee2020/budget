import { Segment, Grid, Icon } from 'semantic-ui-react'

export default function EntryLine({ entry }) {
    return (
        <Segment color={entry.isExpense ? "red" : "green"}>
            <Grid columns={3} textAlign="right">
                <Grid.Row>
                    <Grid.Column textAlign="left" width={10}>
                        {entry.description}
                    </Grid.Column>
                    <Grid.Column textAlign="right" width={3}>
                        {entry.value}
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Icon name="edit" bordered />
                        <Icon name="trash" bordered />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}