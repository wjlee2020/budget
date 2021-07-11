# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About the App
A simple app to keep your budgets

### Tools used
- React for front
- Semantic UI for styles
- Redux (Saga middleware to connect to db, which this case I just used json server https://github.com/typicode/json-server) for global statemanagement

### Things to keep in mind
- TestSaga file is for testing Effect creators
- When creating another saga file for new yield calls/puts, import file into src/sagas/index.js
- Custom Hooks for dispatching add/edit/close modal -> check src/hooks/useEntryDetails.js
