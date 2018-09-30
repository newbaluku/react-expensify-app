import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
  const state = expenseReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([])
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    description: 'buy milk',
    note: 'buy from ntuc',
    createdAt: 1000,
    amount: 200
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense by id', () => {
  const expense = {
    description: 'this is a text',
    note: 'this is a note',
    amount: 100,
    createdAt: 5999
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    update: expense
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual([
    expenses[0],
    {
      ...expenses[1],
      ...expense
    },
    expenses[2]
  ]);
});

test('should not edit expense if id not found', () => {
  const expense = {
    description: 'this is a text',
    note: 'this is a note',
    amount: 100,
    createdAt: 5999
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    update: expense
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[2]]
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual([expenses[2]]);
});