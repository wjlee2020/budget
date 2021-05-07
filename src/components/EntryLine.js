import { Segment, Grid, Icon } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { removeEntryRedux } from '../redux/actions/entries.actions';
import { openModal } from '../redux/actions/modals.actions';

export default function EntryLine({ id, description, value, isExpense, editEntry }) {
    const dispatch = useDispatch();
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
                                onClick={() => dispatch(openModal(id))}
                            />
                            <Icon
                                name="trash"
                                style={{ cursor: 'pointer' }}
                                bordered
                                onClick={() => dispatch(removeEntryRedux(id))}
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </>
    )
}