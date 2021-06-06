import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader'
import NewEntryForm from './components/NewEntryForm'
import DisplayBalance from './components/DisplayBalance'
import DisplayBalances from './components/DisplayBalances'
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';
import { getAllEntriesRedux } from './redux/actions/entries.actions'

function App() {
  const [total, setTotal] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [entry, setEntry] = useState();

  const dispatch = useDispatch();
  const { isOpen, id } = useSelector(state => state.modals);
  const entries = useSelector(state => state.entries);
  // useSelector brings back each state inside our store as an object. 
  // use dot notation to pick out which state we want to use.
  //check:
  // const blank = useSelector(state => state);
  // console.log(blank);

  useEffect(() => {
    const index = entries.findIndex(entry => entry.id === id);
    setEntry(entries[index]);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, id])
  // when isOpen, it sets the entry state into the index of the entries (from redux) of isOpen modal id

  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;
    entries.map(entry => {
      if (entry.isExpense) {
        return totalExpense += Number(entry.value);
      }
      return totalIncome += Number(entry.value);
    });
    setIncome(totalIncome);
    setExpense(totalExpense);
    setTotal(totalIncome - totalExpense);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entries]);

  useEffect(() => {
    dispatch(getAllEntriesRedux());
  })

  return (
    <Container>
      <MainHeader title="Budget" />

      <DisplayBalance title="Your Balance" value={total} size="small" />

      <DisplayBalances income={income} expense={expense} />

      <MainHeader title="History" type="h3" />

      <EntryLines entries={entries} />

      <MainHeader type="h3" title="Add New Transaction" />
      <NewEntryForm />
      <ModalEdit isOpen={isOpen} {...entry} />
    </Container>
  );
}

export default App;
