import { createContext, useState } from 'react'
import { initialEntries } from './seed/initialEntries';

const Context = createContext();

function ContextProvider({ children }) {
    const [entries, setEntries] = useState(initialEntries)
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const [isExpense, setIsExpense] = useState(true)
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Context.Provider value={{
            entries,
            setEntries,
            description,
            setDescription,
            value,
            setValue,
            isExpense,
            setIsExpense,
            isOpen,
            setIsOpen
        }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }