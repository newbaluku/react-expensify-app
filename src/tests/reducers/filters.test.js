import fileterReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
  const state = fileterReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should setup sortBy to amount', () => {
  const state = fileterReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should setup sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const action = { type: 'SORT_BY_DATE' }
  const state = fileterReducer(undefined, action);
  expect(state.sortBy).toBe('date');
});

test('should setup text filter', () => {
  const text = 'this is a test';
  const state = fileterReducer(undefined, {
    type: 'SET_TEXT_FILTER',
    text
  });
  expect(state.text).toBe(text);
});

test('should setup start date filter', () => {
  const action = {
    type: 'SET_START_DATE',
    date: moment()
  }
  const state = fileterReducer(undefined, action);
  expect(state.startDate).toEqual(action.date);
});

test('should setup end date filter', () => {
  const action = {
    type: 'SET_END_DATE',
    date: moment()
  }
  const state = fileterReducer(undefined, action);
  expect(state.endDate).toEqual(action.date);
});