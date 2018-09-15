import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const id = 'abc123';
  const action = removeExpense({ id });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id
  });
});

test('should setup edit expense action object', () => {
  const id = 'abc123';
  const note = 'this is a note';
  const action = editExpense(id, { note });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id,
    update: {
      note
    }
  });
});

test('should setup add expense action object', () => {
  const expenseData = {
    description: 'Coffee',
    note: 'from SB',
    amount: 590,
    createdAt: 1000
  }
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('should setup add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  });
});