import { Segment, Grid } from 'semantic-ui-react'
import DisplayBalance from './DisplayBalance'

export default function DisplayBalances() {
    return (
        <Segment textAlign="center">
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column>
                        <DisplayBalance title="Income:" color="green" value="1,000" />
                    </Grid.Column>
                    <Grid.Column>
                        <DisplayBalance title="Expenses" color="red" value="550" />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}