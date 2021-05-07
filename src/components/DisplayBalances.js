import { Segment, Grid } from 'semantic-ui-react'
import DisplayBalance from './DisplayBalance'

export default function DisplayBalances({ income, expense }) {
    return (
        <Segment textAlign="center">
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column>
                        <DisplayBalance title="Income:" color="green" value={income} />
                    </Grid.Column>
                    <Grid.Column>
                        <DisplayBalance title="Expenses" color="red" value={expense} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}