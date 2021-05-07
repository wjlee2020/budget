import { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader'
import NewEntryForm from './components/NewEntryForm'
import DisplayBalance from './components/DisplayBalance'
import DisplayBalances from './components/DisplayBalances'
import { initialEntries } from './seed/initialEntries';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';

function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState(null);
  const [total, setTotal] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex(entry => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resentEntry();
    }
  }, [isOpen])

  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;
    entries.map(entry => {
      if (entry.isExpense) {
        totalExpense += entry.value;
        setExpense(totalExpense);
      } else {
        totalIncome += entry.value;
        setIncome(totalIncome);
      }
    });
    let total = totalIncome - totalExpense;
    setTotal(total)
    console.log(`total incomes: ${totalIncome} and total expenses: ${totalExpense}`);
  }, [entries])

  function resentEntry() {
    setDescription('');
    setValue('');
    setIsExpense(true);
  }

  function deleteEntry(id) {
    const res = entries.filter(entry => entry.id !== id);
    setEntries(res);
  }

  function addEntry() {
    const res = entries.concat({ id: initialEntries.length + 1, description, value, isExpense });
    setEntries(res);
    resentEntry();
  }

  function editEntry(id) {
    console.log(`edit ${id}`);
    if (id) {
      const index = entries.findIndex(entry => entry.id === id);
      const entry = entries[index];
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  }

  return (
    <Container>
      <MainHeader title="Budget" />

      <DisplayBalance title="Your Balance" value={total} size="small" />

      <DisplayBalances income={income} expense={expense} />

      <MainHeader title="History" type="h3" />

      <EntryLines entries={entries} deleteEntry={deleteEntry} editEntry={editEntry} />

      <MainHeader type="h3" title="Add New Transaction" />
      <NewEntryForm
        addEntry={addEntry}
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
      />
      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        addEntry={addEntry}
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        isExpense={isExpense}
        setIsExpense={setIsExpense} />
    </Container>
  );
}

export default App;
