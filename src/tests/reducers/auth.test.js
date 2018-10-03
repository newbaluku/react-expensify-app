import authReducer from '../../reducers/auth';

test('should setup default auth values', () => {
  const state = authReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({});
});

test('should setup login auth', () => {
  const uid = '123abc'
  const state = authReducer({}, { type: 'LOGIN', uid });
  expect(state.uid).toBe(uid);
});

test('should clear login auth', () => {
  const state = authReducer({ uid: 'anything' }, { type: 'LOGOUT' });
  expect(state.uid).toBeUndefined();
});