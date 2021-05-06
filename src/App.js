import { useContext } from 'react';
import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader'
import NewEntryForm from './components/NewEntryForm'
import DisplayBalance from './components/DisplayBalance'
import DisplayBalances from './components/DisplayBalances'
import EntryLine from './components/EntryLine'
import { Context } from './Context';

function App() {
  const { entries } = useContext(Context)
  const entryElement = entries.map((entry) => (
    <EntryLine key={entry.id} entry={entry} />
  ));

  return (
    <Container>
      <MainHeader title="Budget" />

      <DisplayBalance title="Your Balance" value="2,500" size="small" />

      <DisplayBalances />

      <MainHeader title="History" type="h3" />

      {entryElement}

      <MainHeader type="h3" title="Add New Transaction" />
      <NewEntryForm />

    </Container>
  );
}

export default App;
