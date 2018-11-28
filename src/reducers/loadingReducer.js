import initialState from './initialState';

export default function update(state = initialState.loading, action) {
  if (action.type.includes('START')) {
    return state + 1;
  } else if (
    action.type.includes('COMPLETE') ||
    action.type.includes('ERROR')
  ) {
    return state - 1;
  } else {
    return state;
  }
}
