import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader'
import NewEntryForm from './components/NewEntryForm'
import DisplayBalance from './components/DisplayBalance'
import DisplayBalances from './components/DisplayBalances'
import EntryLine from './components/EntryLine'

function App() {
  return (
    <Container>
      <MainHeader title="Budget" />

      <DisplayBalance title="Your Balance" value="2,500" size="small" />

      <DisplayBalances />

      <MainHeader title="History" type="h3" />

      <EntryLine description="bananas" value="250" isExpense />
      <EntryLine description="carrots" value="250" isExpense />
      <EntryLine description="funding" value="250" />
      <EntryLine description="funding" value="200" />

      <MainHeader type="h3" title="Add New Transaction" />
      <NewEntryForm />

    </Container>
  );
}

export default App;
