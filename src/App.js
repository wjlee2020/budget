import {
  Button,
  Container,
  Form,
  Grid,
  Header,
  Icon,
  Segment,
  Statistic
} from 'semantic-ui-react';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <Container>
      <MainHeader title="Budget" />

      <Statistic size="small">
        <Statistic.Label>Your Balance: </Statistic.Label>
        <Statistic.Value>2,550</Statistic.Value>
      </Statistic>

      <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size="tiny" color="green">
                <Statistic.Label style={{ textAlign: "left" }}>Income:</Statistic.Label>
                <Statistic.Value>1,000</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic size="tiny" color="red">
                <Statistic.Label style={{ textAlign: "left" }}>Expenses:</Statistic.Label>
                <Statistic.Value>500</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <MainHeader title="History" type="h3" />
      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column textAlign="left" width={10}>Banana</Grid.Column>
            <Grid.Column textAlign="right" width={3}>250</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column textAlign="left" width={10}>Carrots</Grid.Column>
            <Grid.Column textAlign="right" width={3}>250</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color="green">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column textAlign="left" width={10}>funding</Grid.Column>
            <Grid.Column textAlign="right" width={3}>250</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      {/* <Header as="h3">Add new transaction</Header> */}
      <MainHeader type="h3" title="Add New Transaction" />
      <Form unstackable>
        <Form.Group>
          <Form.Input
            placeholder="New shoes"
            icon="tags"
            width={12}
            label="Transaction Description"
          />
          <Form.Input
            placeholder="100"
            icon="dollar"
            width={4}
            label="cost"
            iconPosition="left"
          />
        </Form.Group>
        <Button.Group style={{ marginTop: 20 }}>
          <Button primary>Confirm</Button>
          <Button.Or />
          <Button>Cancel</Button>
        </Button.Group>
      </Form>

    </Container>
  );
}

export default App;
